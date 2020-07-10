import * as cbor from "cbor";

const PARSER_TYPE = {
    AUTODETECT: "Autodetect",
    GET_ATTESTATION_RESPONSE: 'Post Attestation JSON (Authenticator -> Relying Party)'
}

const EXAMPLES = {
    GET_ATTESTATION_RESPONSE: {
        "rawId": "1bDwRDd7k6AqQdojv7AX4lWIEOG0ndZBgkyzNFCB15aGOlrczRD10Seyfjdb7ZNsusrX9KGuUWUzFqm8GqfVsg",
        "response": {
            "attestationObject": "o2NmbXRmcGFja2VkZ2F0dFN0bXSjY2FsZyZjc2lnWEcwRQIhAMARFYy6h0-8F8rbOozJfUMLq_a8nylpdPhIkbbZ30CdAiAQk0EAUrBbtTbPsr-J8mWSAed4ibMaVNUmXzN3fiCMLWN4NWOBWQLBMIICvTCCAaWgAwIBAgIEGKxGwDANBgkqhkiG9w0BAQsFADAuMSwwKgYDVQQDEyNZdWJpY28gVTJGIFJvb3QgQ0EgU2VyaWFsIDQ1NzIwMDYzMTAgFw0xNDA4MDEwMDAwMDBaGA8yMDUwMDkwNDAwMDAwMFowbjELMAkGA1UEBhMCU0UxEjAQBgNVBAoMCVl1YmljbyBBQjEiMCAGA1UECwwZQXV0aGVudGljYXRvciBBdHRlc3RhdGlvbjEnMCUGA1UEAwweWXViaWNvIFUyRiBFRSBTZXJpYWwgNDEzOTQzNDg4MFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAEeeo7LHxJcBBiIwzSP-tg5SkxcdSD8QC-hZ1rD4OXAwG1Rs3Ubs_K4-PzD4Hp7WK9Jo1MHr03s7y-kqjCrutOOqNsMGowIgYJKwYBBAGCxAoCBBUxLjMuNi4xLjQuMS40MTQ4Mi4xLjcwEwYLKwYBBAGC5RwCAQEEBAMCBSAwIQYLKwYBBAGC5RwBAQQEEgQQy2lIHo_3QDmT7AonKaFUqDAMBgNVHRMBAf8EAjAAMA0GCSqGSIb3DQEBCwUAA4IBAQCXnQOX2GD4LuFdMRx5brr7Ivqn4ITZurTGG7tX8-a0wYpIN7hcPE7b5IND9Nal2bHO2orh_tSRKSFzBY5e4cvda9rAdVfGoOjTaCW6FZ5_ta2M2vgEhoz5Do8fiuoXwBa1XCp61JfIlPtx11PXm5pIS2w3bXI7mY0uHUMGvxAzta74zKXLslaLaSQibSKjWKt9h-SsXy4JGqcVefOlaQlJfXL1Tga6wcO0QTu6Xq-Uw7ZPNPnrpBrLauKDd202RlN4SP7ohL3d9bG6V5hUz_3OusNEBZUn5W3VmPj1ZnFavkMB3RkRMOa58MZAORJT4imAPzrvJ0vtv94_y71C6tZ5aGF1dGhEYXRhWMTwGNfJbZKBJKgvVC6ftVMcpZoMm0xOEZ4YUL9_OTOHaUUAAAFPy2lIHo_3QDmT7AonKaFUqABA1bDwRDd7k6AqQdojv7AX4lWIEOG0ndZBgkyzNFCB15aGOlrczRD10Seyfjdb7ZNsusrX9KGuUWUzFqm8GqfVsqUBAgMmIAEhWCDE0jSbfClWuXLB8NunovBbkxZPs3S0VyoQeBCh1DNl3CJYIKBVJs3EhCjpDut2JrHG6vj_HTqn-xXNqpl4bqa8KEbK",
            "clientDataJSON": "eyJ0eXBlIjoid2ViYXV0aG4uY3JlYXRlIiwiY2hhbGxlbmdlIjoialdBeXhZYWRsVmYzQVpKamxIcXNqWFIyaEU4ZDJ0TERyNEJ2MFJsSVViZyIsIm9yaWdpbiI6Imh0dHBzOi8vY2VydC5maWRvLnN5Z25wYXkuY29tIiwiY3Jvc3NPcmlnaW4iOmZhbHNlLCJleHRyYV9rZXlzX21heV9iZV9hZGRlZF9oZXJlIjoiZG8gbm90IGNvbXBhcmUgY2xpZW50RGF0YUpTT04gYWdhaW5zdCBhIHRlbXBsYXRlLiBTZWUgaHR0cHM6Ly9nb28uZ2wveWFiUGV4In0"
        },
        "getClientExtensionResults": {},
        "id": "1bDwRDd7k6AqQdojv7AX4lWIEOG0ndZBgkyzNFCB15aGOlrczRD10Seyfjdb7ZNsusrX9KGuUWUzFqm8GqfVsg",
        "type": "public-key"
    }
}

class BaseParser {

    constructor(body) {
        this.body = body;
        this.fields = [];
        this.valid = false;
    }

    type = () => {

    }

    parse = () => {

    }

    isValid = () => {
        return this.valid
    }

    getFields = () => {
        return this.fields
    }

}

let arrayToGuid = (byteArray) => {
    return Array.from(byteArray, function (byte) {
        return ('0' + (byte & 0xFF).toString(16)).slice(-2);
    }).join('').replace(/(.{8})(.{4})(.{4})(.{4})(.{12})/, "$1-$2-$3-$4-$5");
}

class GetAttestationResponseParser extends BaseParser {

    type = () => PARSER_TYPE.GET_ATTESTATION_RESPONSE

    parse = () => {
        let self = this
        return new Promise((res, rej) => {
            try {
                let obj = JSON.parse(this.body)
                // if(!('response' in obj)) return false
                // if(!('attestationObject' in obj.response)) return false
                let buffer = Buffer.from(obj.response.attestationObject, "base64");
                cbor.decodeFirst(buffer, function (error, obj) {
                    console.log(obj)
                    self.fields.push({name: "format", value: obj.fmt})

                    self.fields.push({name: "counter", value: new Uint32Array(obj.authData.slice(33, 33 + 4))})
                    self.fields.push({name: "aaguid", value: arrayToGuid(new Uint32Array(obj.authData.slice(32 + 1 + 4, 32 + 1 + 4 + 16)))})

                    self.valid = true
                    res(self)
                });
            } catch (e) {
                this.valid = false
                rej(e)
            }
        })
    }

}

class Parser {

    constructor(input) {
        this.parsers = [
            new GetAttestationResponseParser(input)
        ]
    }

    parse = () => {
        var p;
        let promises = [];
        for (p of this.parsers) {
            promises.push(p.parse())
        }
        return Promise.any(promises)
            .then(p => {
                console.log(`Matched parser ${p.type()}`)
                return p
            })
    }

}

export {Parser, PARSER_TYPE, EXAMPLES}

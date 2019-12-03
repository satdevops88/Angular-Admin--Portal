
export class MakeRequestService {

  makeRequest(type, endpoint, responsePayload, params) {
    let requestString = ``;
    requestString += `${type} { ${endpoint}`
    if (params) {
      requestString += ` (${this.buildParams(params)})`;
    }
    requestString += ` { ${this.buildResponse(responsePayload)} } }`;
    return requestString;
  }

  buildParams(params) {
    let new_params = [];
    Object.keys(params).map(entry => {
      if (typeof params[entry] !== 'object') {
        new_params.push(`${entry}: ${this.detectType(params[entry])}`);
      } else {
        if (!params[entry].length) {
          new_params.push(`${entry}: { ${this.buildParams(params[entry])} }`);
        } else {
          new_params.push(`${entry}: ${this.buildArraystring(params[entry])}`);
        }
      }
    });
    return new_params.join(', ');
  }

  buildArraystring(entry) {
    let arrayString = [];
    entry.map(item => arrayString.push(`"${item}"`));
    return `[ ${arrayString.join(',')} ]`;
  }

  buildResponse(responsePayload) {
    let payload = [];
    responsePayload.map(entry => {
      if (typeof entry !== 'object') {
        payload.push(entry);
      } else {
        payload.push(`${entry.key} { ${this.buildResponse(entry.fields)} }`);
      }
    });
    return payload.join(' ');
  }

  detectType(entry) {
    return typeof entry === 'string' ? `"${entry}"` : entry;
  }

}


import { HttpErrorResponse } from '@angular/common/http';

export class GeneralUtil {
  static isValidJSON(json: any): boolean {
    if (json == null || json === '' || json === undefined) {
      return false;
    }

    const str = JSON.stringify(json);

    try {
      JSON.parse(str);
    } catch (e) {
      return false;
    }
    return true;
  }
  // Error handling
  static errorHandler(errorResponse: HttpErrorResponse) {
    if (errorResponse.error.message) {
      return errorResponse.error.message;
    } else if (errorResponse.message) {
      return errorResponse.message;
    }
    return errorResponse.error.error;
  }
}

/**
 * LOVYDATE EARLY ACCESS - GOOGLE APPS SCRIPT
 * 
 * Instructions:
 * 1. Open a new Google Sheet at https://sheets.new
 * 2. Rename the first row columns:
 *    A1: "Timestamp"
 *    B1: "Contact (Email / Phone)"
 *    C1: "ISO Date"
 * 3. In the top menu, go to: Extensions > Apps Script
 * 4. Paste this entire code into `Code.gs` and save (Ctrl+S / Cmd+S).
 * 5. Click "Deploy" > "New deployment"
 * 6. Select Type: "Web app"
 * 7. Set:
 *    - Description: "Lovydate Waitlist API"
 *    - Execute as: "Me"
 *    - Who has access: "Anyone" (Required so your website can send data)
 * 8. Click "Deploy", authorize access, and copy the "Web app URL".
 * 9. Paste the URL into `website-landing/.env.local`:
 *    GOOGLE_SHEET_WEBAPP_URL=https://script.google.com/macros/s/.../exec
 */

function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var data = JSON.parse(e.postData.contents);

    var contact = data.contact || "";
    var timestamp = data.timestamp || new Date().toLocaleString();
    var isoDate = data.isoDate || new Date().toISOString();

    sheet.appendRow([timestamp, contact, isoDate]);

    return ContentService.createTextOutput(
      JSON.stringify({ result: "success", contact: contact })
    ).setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService.createTextOutput(
      JSON.stringify({ result: "error", error: error.toString() })
    ).setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  return ContentService.createTextOutput("Lovydate Waitlist API is Live!");
}

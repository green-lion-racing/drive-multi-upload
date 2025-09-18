function doGet(e) {
  return HtmlService
  .createHtmlOutputFromFile('index.html')
  .setTitle("Drive Multi Upload")
  .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

function getOAuthToken() {
  return ScriptApp.getOAuthToken();
}


/**
* creates a folder under a parent folder, and returns the id.
*/
function createFolder(folderName, parentFolderId) {
  parentFolder = DriveApp.getFolderById(parentFolderId);

  if (parentFolder) {
    folder = parentFolder.createFolder(folderName);
    return folder.getId();
  } else {
    return new Error("Parent Folder with id: " + parentFolderId + " not found");
  }
}

// This commented line is used for enabling Drive API and adding a scope of "https://www.googleapis.com/auth/drive".
// So please don't remove this.
// DriveApp.createFile();

// NOTE: always make sure we use DriveApp, even if it's in a comment, for google to import those
// libraries and allow the rest of the app to work. see https://github.com/tanaikech/Resumable_Upload_For_WebApps

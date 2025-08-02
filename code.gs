function doGet(e) {
  return HtmlService.createHtmlOutputFromFile('index.html');
}

function getOAuthToken() {
  return ScriptApp.getOAuthToken();
}

/**
* creates a folder under a parent folder, and returns it's id. If the folder already exists
* then it is not created and it simply returns the id of the existing one
*/
function createOrGetFolder(folderName, parentFolderId) {
  try {
    var foldersIter = DriveApp.getFoldersByName(folderName),
      parentFolder = DriveApp.getFolderById(parentFolderId),
      folder;

    if (parentFolder) {
      if (foldersIter.hasNext()) {
        folder = foldersIter.next();
      } else {
        folder = parentFolder.createFolder(folderName);
      }
    } else {
      throw new Error("Parent Folder with id: " + parentFolderId + " not found");
    }

    return folder.getId();
  } catch (error) {
    return error;
  }
}


// This commented line is used for enabling Drive API and adding a scope of "https://www.googleapis.com/auth/drive".
// So please don't remove this.
// DriveApp.createFile();

// NOTE: always make sure we use DriveApp, even if it's in a comment, for google to import those
// libraries and allow the rest of the app to work. see https://github.com/tanaikech/Resumable_Upload_For_WebApps

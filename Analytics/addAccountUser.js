function addAccountUser() { 
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheets()[0];
  var lastRow = sheet.getLastRow();
  var requester = sheet.getRange(lastRow, 2); //최근 제출된 이메일을 읽어온다.

  
  Analytics.Management.AccountUserLinks.insert({
        'permissions': {
          'local': [
            'COLLABORATE',
            'READ_AND_ANALYZE' // 권한을 지정한다.
          ]
        },
        'userRef': {
          'email': requester.getValue()
        }
      }, {AccountID}) // Account ID. GA의 계정을 가르킨다. 
}

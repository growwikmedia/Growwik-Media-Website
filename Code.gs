function doGet(e) {
  // Default to main page if no specific page is requested
  var page = e.parameter.page || 'index';

  if (page == 'index') {
    return HtmlService.createHtmlOutputFromFile('index');
  } else if (page == 'Case-Study') {
    return HtmlService.createHtmlOutputFromFile('case-studies');
  } else {
    // If an unknown page is requested, load the main page as fallback
    return HtmlService.createHtmlOutputFromFile('index');
  }
}


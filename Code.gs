function doGet(e) {
  // Default to main page if no specific page is requested
  var page = e.parameter.page || 'index';

  if (page == 'index') {
    // Load index.html from the raw GitHub link
    return HtmlService.createHtmlOutputFromUrl('https://raw.githubusercontent.com/growwikmedia/Growwik-Media-Website/main/intex.html'); // Or update to 'index.html' if renamed
  } else if (page == 'Case-Study') {
    // Load case-studies.html from the raw GitHub link
    return HtmlService.createHtmlOutputFromUrl('https://raw.githubusercontent.com/growwikmedia/Growwik-Media-Website/main/case-studies.html');
  } else {
    // If an unknown page is requested, load the main page as fallback
    return HtmlService.createHtmlOutputFromUrl('https://raw.githubusercontent.com/growwikmedia/Growwik-Media-Website/main/intex.html');
  }
}

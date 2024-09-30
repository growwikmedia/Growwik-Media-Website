function doGet(e) {
  // Default to main page if no specific page is requested
  var page = e.parameter.page || 'index';

  if (page == 'index') {
    // Load the index.html file from GitHub Pages (replace 'intex.html' with 'index.html' if that's the correct file name)
    return HtmlService.createHtmlOutputFromUrl('https://raw.githubusercontent.com/growwikmedia/Growwik-Media-Website/main/intex.html'); 
  } else if (page == 'Case-Study') {
    // Load the case-studies.html file from GitHub Pages
    return HtmlService.createHtmlOutputFromUrl('https://raw.githubusercontent.com/growwikmedia/Growwik-Media-Website/main/case-studies.html');
  } else {
    // If an unknown page is requested, fallback to index page
    return HtmlService.createHtmlOutputFromUrl('https://raw.githubusercontent.com/growwikmedia/Growwik-Media-Website/main/intex.html'); // Or 'index.html' if renamed
  }
}

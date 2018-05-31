document.querySelector('.btn').addEventListener('click',(e) => {
    e.preventDefault();
   
   const title = document.getElementById('title');
   const titleHelperClassList = title.nextSibling.nextSibling.classList;
 
   const teaser = document.getElementById('teaser');
   const teaserHelperClassList = teaser.nextSibling.nextSibling.classList;
 
   const articleText = document.getElementById('articletext');
  const articleTextHelperClassList = articleText.nextSibling.nextSibling.classList;

  const author = document.getElementById('author');
  const authorHelperClassList = author.nextSibling.nextSibling.classList;


  //error: title min. 3 words, max. 11 words 
  if (title) {
    titleHelperClassList.remove('hide');
  } else if (!titleHelperClassList.contains('hide')){
    titleHelperClassList.add('hide');
  }

  //error: teaser min. 50 characters, max. 250 characters
  if (teaser.value.length > 250 || teaser.value.length < 50) {
    teaserHelperClassList.remove('hide');
  } else if (!teaserHelperClassList.contains('hide')){
    teaserHelperClassList.classList.add('hide');
  }

  //error: author cannot be empty 
  if (author.value == '') {
    authorHelperClassList.remove('hide');
  } else if (!authorHelperClassList.contains('hide')){
    authorHelperClassList.add('hide');
  }

  // general error message 
  const errorHandling = () => {
    const errorMassege = document.getElementById('error-meldung').classList;
    errorMassege.remove('hide');
    setTimeout(() => {
      errorMassege.add('hide');
    }, 3000)
  }
  errorHandling();


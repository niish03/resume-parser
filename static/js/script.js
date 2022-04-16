const dropArea = document.querySelector('.drag-area');
const dragText = document.querySelector('.header');

let button = getstart.querySelector('.button');
let input = getstart.querySelector('input');

let file;

// when file is inside drag area
dropArea.addEventListener('dragover', (event) => {
    event.preventDefault();
    dropArea.classList.add('active');
    dragText.textContent = 'Release to Upload';
    // console.log('File is inside the drag area');
  });
  
  // when file leave the drag area
  dropArea.addEventListener('dragleave', () => {
    dropArea.classList.remove('active');
    // console.log('File left the drag area');
    dragText.textContent = 'Drag & Drop';
  });
  
  // when file is dropped
  dropArea.addEventListener('drop', (event) => {
    event.preventDefault();
    // console.log('File is dropped in drag area');
  
    file = event.dataTransfer.files[0]; // grab single file even of user selects multiple files
    // console.log(file);
    displayFile();
  });
  
  function displayFile() {
    let fileType = file.type;
    // console.log(fileType);
  
    let validExtensions = ['application/pdf'];
  
    if (validExtensions.includes(fileType)) {
      // console.log('This is an image file');
      let fileReader = new FileReader();
  
      fileReader.onload = () => {
        let fileURL = fileReader.result;
         //console.log(fileURL);
        let imgTag = `<iframe src='${fileURL}' style="width:600px; height:500px;" scrolling="auto"  frameborder="0"></iframe>`;
        dropArea.innerHTML = imgTag;
      };
      fileReader.readAsDataURL(file);
      
    } else {
      alert('This is not an PDF File');
      dropArea.classList.remove('active');
    }
  }
  
  
  button.onclick = () => {
    input.click();
  };
  
  // when browse
  input.addEventListener('change', function () {
    file = this.files[0];
    dropArea.classList.add('active');
    displayFile();
  });
  
  const items = document.querySelectorAll('.accordion button');

  function toggleAccordion() {
    const itemToggle = this.getAttribute('aria-expanded');
  
    for (i = 0; i < items.length; i++) {
      items[i].setAttribute('aria-expanded', 'false');
    }
  
    if (itemToggle == 'false') {
      this.setAttribute('aria-expanded', 'true');
    }
  }
  
  items.forEach((item) => item.addEventListener('click', toggleAccordion)); 

  $('#submit').on("click", function(e){
    document.getElementById("fakesubmit").click();
    $('.loading').removeClass("hidden");
      $('.drag-area').addClass("hidden");
      $('#submit').prop('disabled', true)
      $('#submit').html("Parsing...")
      
      
  } );
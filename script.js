const shareOption = document.querySelector('.share-icons');

    document.querySelector('.share-btn').addEventListener('click', function () {
      this.classList.toggle('active');
      shareOption.classList.toggle('active');
    });
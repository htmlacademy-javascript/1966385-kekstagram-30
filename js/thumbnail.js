
const thumbnailTemplate = document.querySelector('#picture').content.querySelector('.picture');

const createThumbnail = ({ urlPhoto, description, comments, likes, userId }) => {
  const thumbnail = thumbnailTemplate.cloneNode(true);

  thumbnail.querySelector('.picture__img').src = urlPhoto;
  thumbnail.querySelector('.picture__img').alt = description;
  thumbnail.querySelector('.picture__comments').textContent = comments.length;
  thumbnail.querySelector('.picture__likes').textContent = likes;
  thumbnail.dataset.thumbnailId = userId;

  return thumbnail;
};

const renderThumbnails = (pictures, container) => {
  const fragment = document.createDocumentFragment();
  pictures.forEach((picture) => {
    const thumbnail = createThumbnail(picture);

    fragment.append(thumbnail);
  });

  container.append(fragment);
};

export { renderThumbnails };


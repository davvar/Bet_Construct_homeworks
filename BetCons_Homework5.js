//==============================================//
//=============ONLY COMPLETED TASKS=============//
//==============================================//

fetch("https://jsonplaceholder.typicode.com/todos")
  .then((res) => res.json())
  .then((data) => data.filter(({ completed }) => completed));
//   .then(console.log);

//==============================================//
//================ ID and TITLES ===============//
//==============================================//

fetch("https://jsonplaceholder.typicode.com/todos")
  .then((res) => res.json())
  .then((datas) => {
    let titles = [];
    let completed = 0;
    let uncompleted = 0;
    let result = [];

    datas.reduce((prevElem, currentElem, index, datas) => {
      titles.push(prevElem.title);
      prevElem.completed ? (completed += 1) : (uncompleted += 1);

      if (prevElem.userId !== currentElem.userId) {
        //when the user is changed starting
        // everything from the beginning

        result.push({
          userId: prevElem.userId,
          titles: titles.join(""),
          completed,
          uncompleted
        });
        titles = [];
        completed = 0;
        uncompleted = 0;
      }

      if (index === datas.length - 1) {
        titles.push(currentElem.title); //adding the very last element
        currentElem.completed ? (completed += 1) : (uncompleted += 1);
        result.push({
          userId: currentElem.userId,
          titles: titles.join(""),
          completed,
          uncompleted
        });
      }

      return (prevElem = currentElem);
    });

    return result;
  });
//   .then(console.log);

//==============================================//
//=============== Array of Colors ==============//
//==============================================//

fetch("https://jsonplaceholder.typicode.com/photos")
  .then((res) => res.json())
  .then((photos) => photos.map(({ url }) => url.slice(-6)))
  .then((colors) => {
    colors = colors.map((color) => {
      if (color[0] === "/") color = color.slice(1);
      color = "#" + color;
      return color;
    });
    return colors;
  });
//   .then(console.log);

//==============================================//
// =================== Users ===================//
//==============================================//

fetch("https://jsonplaceholder.typicode.com/users")
  .then((res) => res.json())
  .then((users) =>
    users
      .map((user) => {
        let { name: fullname, username, address, company } = user;
        let { city, zipcode } = address;
        let { name: companyName } = company;

        user = { fullname, username, city, zipcode, companyName };

        return user;
      })
      .filter(({ companyName }) => !companyName.includes("-"))
  );
//   .then(console.log);

//==============================================//
// ============== Alboms of Photos =============//
//==============================================//

fetch("https://jsonplaceholder.typicode.com/photos")
  .then((res) => res.json())
  .then((photo_gallery) => {
    let result = [];
    let photos = [];

    photo_gallery.reduce((prevAlbom, currentAlbom, index, photo_gallery) => {
      photos.push(prevAlbom.url);

      if (prevAlbom.albumId !== currentAlbom.albumId) {
        result.push({ albom_id: prevAlbom.albumId, photos });
        photos = [];
      }

      if (index === photo_gallery.length - 1) {
        photos.push(currentAlbom.url); //adding the very last element
        result.push({ albom_id: currentAlbom.albumId, photos });
      }

      return (prevAlbom = currentAlbom);
    });

    return result;
  })
  .then(console.log);

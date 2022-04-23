const tabList = document.querySelector('.sec-work__tab-list');
const tabItemList = tabList.querySelectorAll('.sec-work__tab-item');
const contentItemList = document.querySelectorAll('.sec-work__content-item');

// -----------СМЕНА ВКЛАДКИ ПО КЛИКУ-----------//
tabList.addEventListener('click', event => {
  if (event.target.closest('.sec-work__tab-item')) {

//-----Удалить активный клас с каждого ключа-----//
    tabItemList.forEach(tabItem => {
      tabItem.classList.remove('active');
    });
//-----Удалить активный клас с каждого значения-----//
    contentItemList.forEach(contentItem => {
      contentItem.classList.remove('active');
    });
//-----Получит номер атрибута выбраного ключа-----//
    let pathNumb = event.target.getAttribute('data-path');
//-----Добавить активный клас с для выбраного ключа-----//
    tabItemList.forEach(tabItem => {
      if (tabItem.getAttribute("data-path") == pathNumb) {
        tabItem.classList.add('active');
      }
    });
//-----Добавить активный клас с для выбраного значения-----//
    contentItemList.forEach(contentItem => {
      if (contentItem.getAttribute("data-target") == pathNumb) {
        contentItem.classList.add('active');
      }
    });
  }
});

// -----------СМЕНА ВКЛАДКИ ПО ТАБУ-----------//
tabItemList.forEach(tabItem => {
  tabItem.addEventListener("focus", event=>{
//-----Удалить активный клас с каждого ключа-----//
    tabItemList.forEach(tabItem => {
      tabItem.classList.remove("active");
    });
//-----Удалить активный клас с каждого значения-----//
    contentItemList.forEach(contentItem => {
      contentItem.classList.remove("active");
    });
//-----Добавить активный клас с для выбраного ключа-----//
    tabItem.classList.add("active");
//-----Получит номер атрибута выбраного ключа-----//
    let pathNumb = event.target.getAttribute('data-path');
//-----Добавить активный клас с для выбраного значения-----//
    contentItemList.forEach(contentItem => {
      if (contentItem.getAttribute("data-target") == pathNumb) {
        contentItem.classList.add('active');
      }
    });
  });
});
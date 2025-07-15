function openSubMenu(key) {
    const subMenu = document.getElementById('subMenu');
    const title = document.getElementById('subMenuTitle');
    const content = document.getElementById('subMenuContent');

    const data = {
      'intro': { title: '상명소개', content: '서브 메뉴' },
      'admission': { title: '입학안내', content: '서브 메뉴' },
      'college': { title: '대학 · 대학원', content: '서브 메뉴' },
      'research': { title: '연구 · 산학', content: '서브 메뉴' },
      'academic': { title: '학사안내',   contents: [
        { text: '통합 공지', link: '/noticelist' },
        { text: '학사 일정', link: '/academic/calendar' }
      ] },
      'life': { title: '대학생활', content: '서브 메뉴' },
      'course': { title: '수강신청', content: '서브 메뉴' },
      'login': { title: '로그인', content: '통합 로그인 연결' },
      'favorites': { title: '자주 사용하는 메뉴', content: '즐겨찾는 메뉴' }
    };

    const item = data[key];

    title.innerText = item?.title || '메뉴';
    
    if (item?.contents && Array.isArray(item.contents)) {
        content.innerHTML = item.contents.map(c => 
          `<a href="${c.link}" style="text-decoration: none; color: inherit; display: block; padding: 10px 0;">${c.text}</a>`
        ).join('');
    } else if (item?.link) {
        content.innerHTML = `<a href="${item.link}" style="text-decoration: none; color: inherit; display: block; padding: 10px 0;">${item.content}</a>`;
    } else {
        content.innerText = item?.content || '선택된 메뉴에 대한 설명이 없습니다.';
    }

    subMenu.classList.add('active');
    document.querySelectorAll('.menu-item.active').forEach(i => i.classList.remove('active'));
    if (event.target.classList) event.target.classList.add('active');
}

function closeSubMenu() {
    const subMenu = document.getElementById('subMenu');
    subMenu.classList.remove('active'); 
    document.querySelectorAll('.menu-item.active').forEach(item => item.classList.remove('active'));
}

document.addEventListener('click', function(event) {
    const subMenu = document.getElementById('subMenu');
    const sidebar = document.querySelector('.sidebar'); 

    if (subMenu.classList.contains('active')) {
        if (!subMenu.contains(event.target) && !sidebar.contains(event.target)) {
            closeSubMenu();
        }
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const subMenu = document.getElementById('subMenu');
    if (subMenu.classList.contains('active')) {
        subMenu.classList.remove('active');
    }
});
const menuBtn = document.getElementById('menuBtn');
const navMenu = document.getElementById('navMenu');

menuBtn.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    menuBtn.classList.toggle('active');
});

// メニュー内のリンクを押したらメニューを閉じる
navMenu.addEventListener('click', () => {
    navMenu.classList.remove('active');
    menuBtn.classList.remove('active');
});

// エスコートカードのデータ例
const tableData = {
    'HA': { name: '新郎研究室', guests: [{name:'関根泰様',x:'25%',y:'38%'}, {name:'佐藤様',x:'30%',y:'36%'}], x: '30%', y: '40%' },
    'HB': { name: '新郎小学校', guests: [{name:'関根泰様',x:'25%',y:'38%'}, {name:'佐藤様',x:'30%',y:'36%'}], x: '30%', y: '40%' },
    'HC': { name: '新郎中高', guests: [{name:'関根泰様',x:'25%',y:'38%'}, {name:'佐藤様',x:'30%',y:'36%'}], x: '30%', y: '40%' },
    'HD': { name: '新郎親族', guests: [{name:'関根泰様',x:'25%',y:'38%'}, {name:'佐藤様',x:'30%',y:'36%'}], x: '30%', y: '40%' },
    'SA': { name: '新婦会社', guests: [{name:'関根泰様',x:'25%',y:'38%'}, {name:'佐藤様',x:'30%',y:'36%'}], x: '30%', y: '40%' },
    'SB': { name: '新婦中高', guests: [{name:'関根泰様',x:'25%',y:'38%'}, {name:'佐藤様',x:'30%',y:'36%'}], x: '30%', y: '40%' },
    'SC': { name: '新婦サークル', guests: [{name:'関根泰様',x:'25%',y:'38%'}, {name:'佐藤様',x:'30%',y:'36%'}], x: '30%', y: '40%' },
    'SD': { name: '新婦泡会', guests: [{name:'関根泰様',x:'25%',y:'38%'}, {name:'佐藤様',x:'30%',y:'36%'}], x: '30%', y: '40%' },
    'SE': { name: '新婦親族', guests: [{name:'関根泰様',x:'25%',y:'38%'}, {name:'佐藤様',x:'30%',y:'36%'}], x: '70%', y: '60%' }
};

function showTable(groupId) {
    const data = tableData[groupId];
    document.getElementById('step-group').style.display = 'none';
    document.getElementById('step-name').style.display = 'block';
    document.getElementById('selected-group-name').innerText = data.name;
// テーブルに丸を付ける
    const tMarker = document.getElementById('table-marker');
    tMarker.style.display = 'block';
    tMarker.style.left = data.x;
    tMarker.style.top = data.y;

    // 席の丸は一旦隠す      
    document.getElementById('seat-marker').style.display = 'none';

    // 名前のリストを生成
    const list = document.getElementById('name-list');
    list.innerHTML = '';
    data.guests.forEach(guest => {
        const btn = document.createElement('button');
        btn.className = 'btn';
        btn.innerText = guest.name;
        btn.onclick = () => moveSeatMarker(guest.x, guest.y);
        list.appendChild(btn);
    });
    /*moveMarker(data.x, data.y);*/
}

function moveSeatMarker(x, y) {
    /*document.getElementById('table-marker').style.display = 'none';*/
    const sMarker = document.getElementById('seat-marker');
    sMarker.style.display = 'block';
    sMarker.style.left = x;
    sMarker.style.top = y;
}

function backToGroup() {
    document.getElementById('step-group').style.display = 'block';
    document.getElementById('step-name').style.display = 'none';
    document.getElementById('table-marker').style.display = 'none';
    document.getElementById('seat-marker').style.display = 'none';
}
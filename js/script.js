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
    'HA': { name: '新郎研究室', guests: [{name:'関根泰様',x:'36%',y:'16.2%'}, {name:'七種紘規様',x:'44.5%',y:'24.7%'}, {name:'渡辺光亮様',x:'36%',y:'33.2%'}, {name:'手塚玄惟様',x:'27.5%',y:'24.7%'}], positions: [{x: '36%', y: '24.7%' }]},
    'HB': { name: '新郎小学校', guests: [{name:'和田悟様',x:'25%',y:'38%'}, {name:'三重野一様',x:'30%',y:'36%'}, {name:'鋤先俊亮様',x:'30%',y:'36%'}, {name:'木下隼太朗様',x:'30%',y:'36%'}, {name:'岩政亮汰様',x:'30%',y:'36%'}, {name:'伊藤廉様',x:'30%',y:'36%'}, {name:'後藤昌彦様',x:'30%',y:'36%'}, {name:'平戸英明様',x:'30%',y:'36%'}], positions: [{x: '22%', y: '40%' }]},
    'HC': { name: '新郎中高', guests: [{name:'関根泰様',x:'25%',y:'38%'}, {name:'佐藤様',x:'30%',y:'36%'}], positions: [{x: '30%', y: '40%' }, {x: '60%', y: '70%' }]},
    'HD': { name: '新郎親族', guests: [{name:'関根泰様',x:'25%',y:'38%'}, {name:'佐藤様',x:'30%',y:'36%'}], positions: [{x: '30%', y: '40%' }, {x: '60%', y: '70%' }]},
    'SA': { name: '新婦会社', guests: [{name:'関根泰様',x:'25%',y:'38%'}, {name:'佐藤様',x:'30%',y:'36%'}], positions: [{x: '30%', y: '40%' }, {x: '60%', y: '70%' }]},
    'SB': { name: '新婦中高', guests: [{name:'関根泰様',x:'25%',y:'38%'}, {name:'佐藤様',x:'30%',y:'36%'}], positions: [{x: '30%', y: '40%' }, {x: '60%', y: '70%' }]},
    'SC': { name: '新婦サークル', guests: [{name:'関根泰様',x:'25%',y:'38%'}, {name:'佐藤様',x:'30%',y:'36%'}], positions: [{x: '30%', y: '40%' }, {x: '60%', y: '70%' }]},
    'SD': { name: '新婦泡会', guests: [{name:'関根泰様',x:'25%',y:'38%'}, {name:'佐藤様',x:'30%',y:'36%'}], positions: [{x: '30%', y: '40%' }, {x: '60%', y: '70%' }]},
    'SE': { name: '新婦親族', guests: [{name:'関根泰様',x:'25%',y:'38%'}, {name:'佐藤様',x:'30%',y:'36%'}], positions: [{x: '30%', y: '40%' }, {x: '60%', y: '70%' }]}
};

function showTable(groupId) {
    const data = tableData[groupId];
    document.getElementById('step-group').style.display = 'none';
    document.getElementById('step-name').style.display = 'block';
    document.getElementById('selected-group-name').innerText = data.name;

    // 既存のテーブルマーカーを一度削除する ---
    const mapWrapper = document.querySelector('.map-wrapper');
    const oldMarkers = document.querySelectorAll('.dynamic-table-marker');
    oldMarkers.forEach(m => m.remove());
// テーブルに丸を付ける
    if (data.positions && data.positions.length > 0) {
        data.positions.forEach(pos => {
            const tMarker = document.createElement('div');
            tMarker.className = 'marker dynamic-table-marker'; // 共通クラスと削除用クラス
            tMarker.style.display = 'block';
            tMarker.style.left = pos.x;
            tMarker.style.top = pos.y;
            mapWrapper.appendChild(tMarker);
        });
    }


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
    document.querySelectorAll('.dynamic-table-marker').forEach(m => m.remove());
    document.getElementById('seat-marker').style.display = 'none';
}
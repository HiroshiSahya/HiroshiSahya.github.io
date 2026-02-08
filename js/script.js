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
    'HB': { name: '新郎小学校', guests: [{name:'和田悟様',x:'25%',y:'38%'}, {name:'三重野一様',x:'30%',y:'36%'}, {name:'鋤先俊亮様',x:'30%',y:'36%'}, {name:'木下隼太朗様',x:'30%',y:'36%'}, {name:'岩政亮汰様',x:'30%',y:'36%'}, {name:'伊藤廉様',x:'30%',y:'36%'}, {name:'後藤昌彦様',x:'30%',y:'36%'}, {name:'平戸英明様',x:'30%',y:'36%'}], positions: [{x: '22%', y: '39.6%' }]},
    'HC': { name: '新郎中高', guests: [{name:'清水健様',x:'25%',y:'38%'}, {name:'渡邊大祐様',x:'30%',y:'36%'}, {name:'臼井幹博様',x:'30%',y:'36%'}, {name:'秋山航海様',x:'30%',y:'36%'}, {name:'江崎蘭世様',x:'30%',y:'36%'}], positions: [{x: '10.5%', y: '54.8%' }]},
    'HD': { name: '新郎親族', guests: [{name:'久我成子様',x:'25%',y:'38%'}, {name:'近藤紀子様',x:'30%',y:'36%'}, {name:'近藤純一様',x:'30%',y:'36%'}, {name:'近藤克輝様',x:'30%',y:'36%'}, {name:'近藤智美様',x:'30%',y:'36%'}, {name:'近藤慧史様',x:'30%',y:'36%'}, {name:'平田文子様',x:'30%',y:'36%'}, 
                                      {name:'倉島聰子様',x:'30%',y:'36%'}, {name:'三瓶公子様',x:'30%',y:'36%'}, {name:'三瓶純志様',x:'30%',y:'36%'}, {name:'三瓶尚志様',x:'30%',y:'36%'}, {name:'三瓶純子様',x:'30%',y:'36%'}, {name:'田川美智子様',x:'30%',y:'36%'}, {name:'田川行雄様',x:'30%',y:'36%'}], positions: [{x: '26.6%', y: '70%' }, {x: '36.3%', y: '85%' }]},
    'SA': { name: '新婦会社', guests: [{name:'中村裕仁様',x:'25%',y:'38%'}, {name:'澤村美紀様',x:'30%',y:'36%'}, {name:'上松啓介様',x:'30%',y:'36%'}, {name:'梅田章仁様',x:'30%',y:'36%'}, {name:'川上貴弘様',x:'30%',y:'36%'}, {name:'神山連様',x:'30%',y:'36%'}, {name:'山口史乃様',x:'30%',y:'36%'}, {name:'太田和洋様',x:'30%',y:'36%'}, 
                                      {name:'高島史郎様',x:'30%',y:'36%'}, {name:'相輪歩様',x:'30%',y:'36%'}, {name:'高岡颯良様',x:'30%',y:'36%'}, {name:'野口聖七様',x:'30%',y:'36%'}, {name:'小倉有里加様',x:'30%',y:'36%'}, {name:'小林歩様',x:'30%',y:'36%'}, {name:'土田太一様',x:'30%',y:'36%'}, {name:'岸下竜士様',x:'30%',y:'36%'}], positions: [{x: '50%', y: '39.6%' }, {x: '64%', y: '24.7%' }]},
    'SB': { name: '新婦中高', guests: [{name:'冨家遥桂様',x:'25%',y:'38%'}, {name:'伊藤蛍様',x:'30%',y:'36%'}, {name:'廣瀬桐子様',x:'30%',y:'36%'}, {name:'西村佳奈絵様',x:'30%',y:'36%'}, {name:'伊藤愛梨様',x:'30%',y:'36%'}, {name:'飯塚菜々子様',x:'30%',y:'36%'}, {name:'本折優芽様',x:'30%',y:'36%'}, {name:'松浦良知様',x:'30%',y:'36%'}, {name:'鳥羽博様',x:'30%',y:'36%'}], positions: [{x: '77.8%', y: '39.6%' }]},
    'SC': { name: '新婦学科', guests: [{name:'加藤昂様',x:'25%',y:'38%'}, {name:'山本祐衣様',x:'30%',y:'36%'}, {name:'田中沙穂様',x:'30%',y:'36%'}, {name:'植田紗綾様',x:'30%',y:'36%'}, {name:'中前汐里様',x:'30%',y:'36%'}], positions: [{x: '38.2%', y: '54.8%' }]},
    'SD': { name: '新婦サークル', guests: [{name:'丸山千晴様',x:'25%',y:'38%'}, {name:'上松剛己様',x:'30%',y:'36%'}, {name:'三吉野節様',x:'30%',y:'36%'}, {name:'木谷勇稀様',x:'30%',y:'36%'}, {name:'中村洋輝様',x:'30%',y:'36%'}, {name:'中村あいり様',x:'30%',y:'36%'}, {name:'藤澤みづき様',x:'30%',y:'36%'}, {name:'清水美羽様',x:'30%',y:'36%'}], positions: [{x: '62.2%', y: '54.8%' }]},
    'SE': { name: '新婦泡会', guests: [{name:'関根泰様',x:'25%',y:'38%'}, {name:'佐藤様',x:'30%',y:'36%'}], positions: [{x: '89.8%', y: '54.8%' }]},
    'SF': { name: '新婦親族', guests: [{name:'関根泰様',x:'25%',y:'38%'}, {name:'佐藤様',x:'30%',y:'36%'}], positions: [{x: '30%', y: '40%' }, {x: '60%', y: '70%' }]}
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
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
canvas.width = 800;
canvas.height = 600;

// ゲームの設定
const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;
const PLAYER_SPEED = 5;
const PLAYER_COLOR = 'blue';
const ENEMY_COLOR = 'red';
const BACKGROUND_COLOR = 'white';

//背景画像を読み込む
const backgroundImage = new Image();
backgroundImage.src = '01.png';

// プレイヤーオブジェクトを作成する
const PLAYER_SIZE = 10;
const player = {
    x: GAME_WIDTH / 2,
    y: GAME_HEIGHT / 2,
    size: PLAYER_SIZE,
    color: PLAYER_COLOR,
    prevX: GAME_WIDTH / 2,
    prevY: GAME_HEIGHT / 2,
    initialX: GAME_WIDTH / 2, // プレイヤーの初期X座標
    initialY: GAME_HEIGHT / 2, // プレイヤーの初期Y座標
};

//敵オブジェクトを作成する
const ENEMY_SIZE = 20;
const enemy = {
    x: GAME_WIDTH - 50,
    y: GAME_HEIGHT / 2,
    radius: 10,
    speed: 4, //敵オブジェクトのスピード
    angle: Math.random() * Math.PI * 45, //敵が動く角度（ランダム）
    initialX: GAME_WIDTH - 50, // 敵の初期X座標
    initialY: GAME_HEIGHT / 2, // 敵の初期Y座標
};

// キー入力の処理
document.addEventListener('keydown', event => {

    // キー入力に応じてプレイヤーの位置を更新する
    if (event.code === 'ArrowUp') {
        player.y -= PLAYER_SPEED;
    } else if (event.code === 'ArrowDown') {
        player.y += PLAYER_SPEED;
    } else if (event.code === 'ArrowLeft') {
        player.x -= PLAYER_SPEED;
    } else if (event.code === 'ArrowRight') {
        player.x += PLAYER_SPEED;
    }

    // プレイヤーが画面外に出た場合の処理
    if (player.x < player.size / 2) {
        player.x = player.size / 2;
    }
    if (player.x > GAME_WIDTH - player.size / 2) {
        player.x = GAME_WIDTH - player.size / 2;
    }
    if (player.y < player.size / 2) {
        player.y = player.size / 2;
    }
    if (player.y > GAME_HEIGHT - player.size / 2) {
        player.y = GAME_HEIGHT - player.size / 2;
    }
});

// ゲームを再スタートする
function restartGame() {
    player.x = player.initialX;
    player.y = player.initialY;
    enemy.x = enemy.initialX;
    enemy.y = enemy.initialY;
}


// ゲームループを作成する
function gameLoop() {
    //キャンバスの初期化
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // 背景画像を描画する
    ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);

    // プレイヤーを描画する
    ctx.fillStyle = player.color;
    ctx.fillRect(player.x - player.size / 2, player.y - player.size / 2, player.size, player.size);

    //敵を描画する
    ctx.fillStyle = ENEMY_COLOR;
    ctx.beginPath();
    ctx.arc(enemy.x, enemy.y, enemy.radius, 0, Math.PI * 2);
    ctx.fill();

    //敵を移動する
    enemy.x += enemy.speed * Math.cos(enemy.angle * Math.PI / 180);
    enemy.y += enemy.speed * Math.sin(enemy.angle * Math.PI / 180);

    //敵が壁に当たったら跳ね返る
    if (enemy.x < enemy.radius || enemy.x > GAME_WIDTH - enemy.radius) {
        enemy.angle = 180 - enemy.angle;
    }
    if (enemy.y < enemy.radius || enemy.y > GAME_HEIGHT - enemy.radius) {
        enemy.angle = 360 - enemy.angle;
    }


    // プレイヤーと敵が衝突したかどうかを判定する
    const dx = enemy.x - player.x;
    const dy = enemy.y - player.y;
    const distance = Math.sqrt(dx * dx + dy * dy);
    if (distance < enemy.radius + player.size / 2) {
        // 衝突したらゲームオーバー
        alert('You Win');
        restartGame();
    }

    // ゲームループを再度呼び出す
    requestAnimationFrame(gameLoop);
}

// ゲームループを開始する
gameLoop();

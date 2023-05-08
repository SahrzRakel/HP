const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
canvas.width = 800;
canvas.height = 600;

// �Q�[���̐ݒ�
const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;
const PLAYER_SPEED = 5;
const PLAYER_COLOR = 'blue';
const BACKGROUND_COLOR = 'white';

// �v���C���[�I�u�W�F�N�g���쐬����
const PLAYER_SIZE = 10;
const player = {
    x: GAME_WIDTH / 2,
    y: GAME_HEIGHT / 2,
    size: PLAYER_SIZE,
    color: PLAYER_COLOR,
};

// �L�[���͂̏���
document.addEventListener('keydown', event => {
    if (event.code === 'ArrowUp') {
        player.y -= PLAYER_SPEED;
    } else if (event.code === 'ArrowDown') {
        player.y += PLAYER_SPEED;
    } else if (event.code === 'ArrowLeft') {
        player.x -= PLAYER_SPEED;
    } else if (event.code === 'ArrowRight') {
        player.x += PLAYER_SPEED;
    }

    // �v���C���[����ʊO�ɏo���ꍇ�̏���
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


// �Q�[�����[�v���쐬����
function gameLoop() {
    // �L�����o�X���N���A����
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // �v���C���[��`�悷��
    ctx.fillStyle = player.color;
    ctx.fillRect(player.x - player.size / 2, player.y - player.size / 2, player.size, player.size);

    // �Q�[�����[�v���ēx�Ăяo��
    requestAnimationFrame(gameLoop);
}

// �Q�[�����[�v���J�n����
gameLoop();

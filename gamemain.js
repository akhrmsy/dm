// ******************************************************
// 各種 Image
// cl.gifは透明画像
// ******************************************************
var imgs = new Array(256);				// image data
var pnum_img = new Array(10);			// Para Number
var dmgnum_img = new Array(10);			// Damage Number
var player_at_img = new Array(20);		// Player Attack
var map_img = new Array(10);			// Maptip
var darkmask_img = new Array(3);		// Dark Mask
var break_img = new Array(4);			// Enemy Break Effect

var dark_img = new Image();
dark_img.src = "dark.gif";
var cl_img = new Image();
cl_img.src = "cl.gif";
var gameover_img = new Image();
gameover_img.src = "gameover.gif";

var opback_img = new Image();
opback_img.src = "opback.gif";
var edback_img = new Image();
edback_img.src = "edback.gif";

var flash_img = new Image();
flash_img.src = "flash.gif";

var titlelogo_img = new Image();
titlelogo_img.src = "titlelogo.gif";

var fire_img = new Array(4);
fire_img[0] = new Image();
fire_img[0].src = "fire0.gif";
fire_img[1] = new Image();
fire_img[1].src = "fire1.gif";
fire_img[2] = new Image();
fire_img[2].src = "fire2.gif";
fire_img[3] = new Image();
fire_img[3].src = "fire3.gif";

imgs[1]=new Image();
imgs[1].src="player00.gif";
imgs[2]=new Image();
imgs[2].src="player01.gif";
imgs[3]=new Image();
imgs[3].src="player02.gif";
imgs[4]=new Image();
imgs[4].src="player03.gif";
imgs[5]=new Image();
imgs[5].src="player04.gif";
imgs[6]=new Image();
imgs[6].src="player05.gif";
imgs[7]=new Image();
imgs[7].src="player06.gif";
imgs[8]=new Image();
imgs[8].src="player07.gif";
imgs[17]=new Image();
imgs[17].src="wall.gif";
imgs[18]=new Image();
imgs[18].src="background.gif";

// ******************************************************
// メッセージ周り
// ******************************************************
var STR_GAME_OVER = "ゲームオーバー";
var STR_GAME_START = "クルース、助けて！";
var STR_GAME_CLEAR = "ダンジョン内で集めたアイテムは希少価値があります。";
var STR_ITEMTOGOLD = "アイテムをゴールドに換金します。";
var STR_ITEMTOGOLD_END = " G 加算されました";
var ENDING_STORY_H = 2096;
var OPENING_STORY_H = 490;
var WAIT_OPENING=5000;//5000ms。

function MessageData()
{
	this.activ = 0;	// ウィンドウの状態
	this.x = 0;		// ウインドウを表示する座標
	this.y = 0;		// ウインドウを表示する座標
	this.wait = 0;	// ウィンドウを表示している時間

	return this;
}
var msgd = new MessageData();
var MSG_DRAW_WAIT = 70;

var msg_window_img=new Image();
msg_window_img.src = "window.gif";
var msg_get_img=new Image();
msg_get_img.src = "message01.gif";

var msg_get_wep_img = new Array(4);
msg_get_wep_img[0] = new Image();
msg_get_wep_img[0].src = "text/item_wepon0.gif";
msg_get_wep_img[1] = new Image();
msg_get_wep_img[1].src = "text/item_wepon1.gif";
msg_get_wep_img[2] = new Image();
msg_get_wep_img[2].src = "text/item_wepon2.gif";
msg_get_wep_img[3] = new Image();
msg_get_wep_img[3].src = "text/item_wepon3.gif";

var msg_get_arm_img = new Array(4);
msg_get_arm_img[0] = new Image();
msg_get_arm_img[0].src = "text/item_armor0.gif";
msg_get_arm_img[1] = new Image();
msg_get_arm_img[1].src = "text/item_armor1.gif";
msg_get_arm_img[2] = new Image();
msg_get_arm_img[2].src = "text/item_armor2.gif";
msg_get_arm_img[3] = new Image();
msg_get_arm_img[3].src = "text/item_armor3.gif";

var eq_wep_img = new Array(4);
eq_wep_img[0] = new Image();
eq_wep_img[0].src = "wepon_text0.gif";
eq_wep_img[1] = new Image();
eq_wep_img[1].src = "wepon_text1.gif";
eq_wep_img[2] = new Image();
eq_wep_img[2].src = "wepon_text2.gif";
eq_wep_img[3] = new Image();
eq_wep_img[3].src = "wepon_text3.gif";

var eq_arm_img = new Array(4);
eq_arm_img[0] = new Image();
eq_arm_img[0].src = "armor_text0.gif";
eq_arm_img[1] = new Image();
eq_arm_img[1].src = "armor_text1.gif";
eq_arm_img[2] = new Image();
eq_arm_img[2].src = "armor_text2.gif";
eq_arm_img[3] = new Image();
eq_arm_img[3].src = "armor_text3.gif";

var msg_get_item_img = new Array(20);

var item_list_name_img = new Array(20);

// ******************************************************
// GameData
// ******************************************************
var MAPSCR_X = 15;		// ゲーム画面の基準座標
var MAPSCR_Y = 11;		// ゲーム画面の基準座標
var MAX_STAGE = 20;		// ステージ数
var LIGHT_CNT = 100;	// 松明の持続時間

var G_MODE_OP_INIT = 0;
var G_MODE_OP = 1;
var G_MODE_TITLE_INIT = 2;
var G_MODE_TITLE = 3;
var G_MODE_MAIN_INIT = 4;
var G_MODE_MAIN = 5;
var G_MODE_GAMEOVER = 6;
var G_MODE_GAMECLEAR_INIT = 7;
var G_MODE_GAMECLEAR_MAIN = 8;

var get_weapon_cnt = new Array(4);	// 武器出現に必要な倒した敵の数
get_weapon_cnt[0] = 5;
get_weapon_cnt[1] = 7;
get_weapon_cnt[2] = 10;
get_weapon_cnt[3] = 12;

var get_armor_cnt = new Array(4);	// 鎧出現に必要な倒した敵の数
get_armor_cnt[0] = 5;
get_armor_cnt[1] = 7;
get_armor_cnt[2] = 10;
get_armor_cnt[3] = 12;

// アイテムの得点
var pitem_points = new Array(10,15,20,25,30,35,40,45,50,55,60,65,70,75,80,85,90,95,100,105);

var player_image_no = 1;
var player_attack_no = 8;

var PlayerImg;

var flash_on = 0;
var flash_cnt = 0;

var opfont_x = 0;	// ストーリーフォントの座標
var opfont_y = 0;
var edfont_x = 0;
var edfont_y = 0;

var press_key = 0;	// 0...UP 1... DOWN 2...LEFT 3...RIGHT
var key_code = -1;
var old_key_code = -1;

var pl_dmg_set = 0;	// 敵から一方的に殴られた時
var pl_dmg_set_dmg = 0;	// その時のダメージ

var map_dark = new Array(15);	// MAPの明かり判定 0...可視 /1...不可視 /2...不可視に変更

var srashcnt = 0;	// 斬りエフェクト

var delenemynumber = -1;
var ebreakcnt = 0;
var ebreakwait = 0;
var EBREAKWAIT_MAX = 1;
var EBREAKCNT_MAX = 4;

var step_x_stage = new Array(MAX_STAGE);
var step_y_stage = new Array(MAX_STAGE);
var stepx = 0;
var stepy = 0;

var rnd_x = 0;	// ランダム座標セット時に使用
var rnd_y = 0;	// ランダム座標セット時に使用

function GameData()
{
	this.mode = 0;		// 
	this.cnt = 0;		// ゲームカウント
	this.stage = 0;		// 現在のステージ数
	this.gameclear = 0;	// ゲームクリアの判定フラグ
	this.gameover = 0;	// ゲームオーバーの判定フラグ
	this.pitem = new Array(MAX_STAGE);	// 得点アイテム
	this.lightcnt = 0;	// 松明の時間(歩数)
	this.hit_dir = 0;	// 攻撃した方向 0-2 正面/後ろ/側面
	this.r_item_set = 0;// 換金アイテム出現判定 0...なし 1...有り
	this.no_encount = 0;// 敵との接触なしに歩いた歩数
	this.r_item_tmp = 0;// 換金アイテム取得に関する汎用変数
	this.r_item_get = 0;// レアアイテムを入手したか
	this.e_item_get = 0;// 装備アイテムを入手したか
	this.enemy_dead = 0;// そのステージで倒した敵の数
	this.boss_get = 0;	// ボスが出現したか
	this.key_press = 0;	// キーが押されたか
	this.op_flg = 0;	// オープニングの管理
	this.ed_flg = 0;	// エンディングの管理
	this.go_flg = 0;	// ゲームオーバーの管理
	this.pi_gld = 0;	// itemで加算されたGOLD

	this.debug = 0;
	this.debug2 = 0;

	return this;
}

var gamed = new GameData();

// ******************************************************
// UnitData
// ******************************************************
function UnitData()
{
	this.activ = 0;		// 
	this.type = 0;		// 種類
	this.dead = 0;		// 死亡判定
	this.lv = 0;		// レベル
	this.hp = 0;		// ライフ現在
	this.maxhp = 0;		// ライフ最大
	this.atk = 0;		// 攻撃力
	this.def = 0;		// 防御力
	this.exp = 0;		// 経験値
	this.gold = 0;		// 所持金
	this.weapon = 0;	// 装備：武器
	this.armor = 0;		// 装備：鎧
	this.x = 0;			// 
	this.y = 0;			// 
	this.old_x = 0;		// 
	this.old_y = 0;		// 
	this.dir = 0;		// 方向
	this.step = 0;		// 足踏みパターン
	this.attack = 0;	// 攻撃パターン
	this.attack_wait = 0;
	this.movecnt = 0;
	this.light = 0;		// 明かりの広さ 0...真っ暗 /1～3
	this.actioncnt = 0;	// 行動
	this.dmgdraw_wait = 0;	// 被ダメ表示時間
	this.sight = 0;			// 視界の広さ
	this.img_number = 0;// イメージの登録番号
	this.encount = 0;	// 敵と接触したか 0...してない /1...した
	this.encount_stop = 0;
	this.encount_wall = 0;// 敵以外の何かと接触したか
	this.walkcnt = 0;	// 何歩歩いたか
	this.re_wait = 0;		// 死んだ後出てくるまでの待機時間
	return this;
}

var Player = new UnitData();
var playerx_enemy_hitcheck = 0;
var playery_enemy_hitcheck = 0;
var lv_up_exp = new Array(10,20,40,60,100,150,200,250,350,450,550,700,850,1000,1200,1400,1600,1900,2200,2500);

var MAX_LV = 20;
var MAX_EXP = 2500;
var MAX_GOLD = 9999;
var UP_HP = 5;
var PLAYER_START_X = 8;
var PLAYER_START_Y = 8;

// ******************************************************
// Enemy
// ******************************************************
var ENEMY_MAX = 5;	// 一度に出る最大数
var ENEMY_KIND = 5;	// 一ステージ辺りの最大種類
var boss_get_cnt_stagedata = new Array(6);	// ボス出現に必要な敵の数
boss_get_cnt_stagedata[0] = 5;
boss_get_cnt_stagedata[1] = 5;
boss_get_cnt_stagedata[2] = 5;
boss_get_cnt_stagedata[3] = 5;
boss_get_cnt_stagedata[4] = 5;
boss_get_cnt_stagedata[5] = 5;
var boss_get_cnt = 0;
var enemy_stage_max = new Array(50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,999999);	// そのステージで出る数
var enemy_stage_cnt = 0;	// 現在までに出た数
var Enemy = new Array(ENEMY_MAX);

var enemy_img = new Array(ENEMY_KIND);

var WallMax = 20;
var wall_x = new Array(WallMax);
var wall_y = new Array(WallMax);

var wall_stage_data = new Array(MAX_STAGE);

// ******************************************************
// ITEM
// ******************************************************
function ItemData()
{
	this.activ = 0;
	this.type = 0;
	this.on = 0;
	this.x = 0;
	this.y = 0;
}

var item_name = new Array(14);
item_name[0] = "torch.gif";
item_name[1] = "coin.gif";
item_name[2] = "ingot.gif";
item_name[3] = "wepon0.gif";
item_name[4] = "wepon1.gif";
item_name[5] = "wepon2.gif";
item_name[6] = "wepon3.gif";
item_name[7] = "armor0.gif";
item_name[8] = "armor1.gif";
item_name[9] = "armor2.gif";
item_name[10] = "armor3.gif";
item_name[11] = "b-potion.gif";
item_name[12] = "k-potion.gif";
item_name[13] = "princess.gif";

var wep_atk = new Array(4);	// 武器の攻撃力
wep_atk[0] = 1;
wep_atk[1] = 2;
wep_atk[2] = 3;
wep_atk[3] = 4;

var arm_def = new Array(4);	// 鎧の守備力
arm_def[0] = 1;
arm_def[1] = 2;
arm_def[2] = 3;
arm_def[3] = 4;

var COIN_POINTS = 5;		// 金貨 入手ゴールド
var INGOT_POINTS = 15;		// 金塊 入手ゴールド
var B_POTION_POINTS = 20;	// Bポーション 回復量
var K_POTION_POINTS = -5;	// Kポーション 回復量

// 0 ... 開始時に設置 松明
// 3 ... 条件で出現   武器・鎧
var ITEM_MAX = 5;
var itemd = new Array(ITEM_MAX);

var BOX_MAX = 3;
var boxd = new Array(BOX_MAX);

var box_c_img = new Image();	// Box Close
box_c_img.src = "box01.gif";
var box_o_img = new Image();	// Box Open
box_o_img.src = "box02.gif";

// ******************************************************
// 開始直後の初期化
// ******************************************************
function GameInit()
{
	var i = 0;
	var j = 0;
	var tmp = 0;

	// 画像の生成開始
	document.open();

	// MAPTIP
	for( i = 0; i < 225; i++ ) document.write("<IMG SRC = 'maptip0.gif' name='map"+i+"'>");

	// 階段
	document.write("<IMG SRC = 'step.gif' name='step0'>");

	// 壁
	for( i = 0; i < WallMax; i++ ) document.write("<IMG SRC = 'wall0.gif' name='wall"+i+"'>");

	// 敵
	for( i = 0; i < ENEMY_MAX; i++ ) document.write("<IMG SRC = 'enemy00.gif' name='enemy"+i+"'>");

	// プレイヤー
	document.write("<IMG src='player00.gif' name='player0'>");

	// 敵のやられエフェクト
	document.write("<IMG SRC = 'cl.gif' name='break0'>");

	// アイテム
	for( i = 0; i < ITEM_MAX; i++ ) document.write("<IMG SRC = 'cl.gif' name='item"+i+"'>");

	// 宝箱
	for( i = 0; i < BOX_MAX; i++ ) document.write("<IMG SRC = 'cl.gif' name='box"+i+"'>");

	// 暗闇
	for( i = 0; i < 225; i++ ) document.write("<IMG SRC = 'dark.gif' name='dark"+i+"'>");
	for( i = 0; i < 14; i++ ) document.write("<IMG SRC = 'dark.gif' name='mapdark_margin"+i+"'>");

	document.write("<IMG src='darkmask0.gif' name='darkmask0'>");

	// 斬りエフェクト
	document.write("<IMG src='srash.gif' name='srash0'>");

	// OpBack
	document.write("<IMG SRC = 'cl.gif' name='opback0'>");

	// OpFont
	document.write("<IMG SRC = 'cl.gif' name='opfont0'>");

	// EdBack
	document.write("<IMG SRC = 'cl.gif' name='edback0'>");

	// EdFont
	document.write("<IMG SRC = 'cl.gif' name='edfont0'>");
	document.write("<IMG SRC = 'cl.gif' name='edfin0'>");

	// 背景
	document.write("<IMG SRC = 'background.gif' name='background0'>");

	// メッセージ窓
	document.write("<IMG src='cl.gif' name='msgwindow0'>");
	// メッセージ「手に入れた」
	document.write("<IMG src='cl.gif' name='msgget0'>");
	// アイテム名
	document.write("<IMG src='cl.gif' name='msggetitemname0'>");

	// ダメージ用の数字
	document.write("<IMG SRC = 'cl.gif' name='dmgnum0'>");	// プレイヤー
	document.write("<IMG SRC = 'cl.gif' name='dmgnum1'>");
	document.write("<IMG SRC = 'cl.gif' name='dmgnum2'>");
	document.write("<IMG SRC = 'cl.gif' name='edmgnum0'>");	// 敵用
	document.write("<IMG SRC = 'cl.gif' name='edmgnum1'>");
	document.write("<IMG SRC = 'cl.gif' name='edmgnum2'>");

	// 装備表示
	document.write("<IMG SRC = 'cl.gif' name='wepname0'>");
	document.write("<IMG SRC = 'cl.gif' name='armname0'>");

	// HP BAR
	for( i = 0; i < 100; i++ ) document.write("<IMG SRC = 'hpbar.gif' name='hpbar"+i+"'>");

	// ステータス関連の数字
	document.write("<IMG SRC = 'num0.gif' name='bf0'>");
	document.write("<IMG SRC = 'num0.gif' name='bf1'>");
	document.write("<IMG SRC = 'num0.gif' name='lv0'>");
	document.write("<IMG SRC = 'num0.gif' name='lv1'>");
	document.write("<IMG SRC = 'num0.gif' name='hp0'>");
	document.write("<IMG SRC = 'num0.gif' name='hp1'>");
	document.write("<IMG SRC = 'num0.gif' name='hp2'>");
	document.write("<IMG SRC = 'num0.gif' name='ex0'>");
	document.write("<IMG SRC = 'num0.gif' name='ex1'>");
	document.write("<IMG SRC = 'num0.gif' name='ex2'>");
	document.write("<IMG SRC = 'num0.gif' name='ex3'>");
	document.write("<IMG SRC = 'num0.gif' name='gd0'>");
	document.write("<IMG SRC = 'num0.gif' name='gd1'>");
	document.write("<IMG SRC = 'num0.gif' name='gd2'>");
	document.write("<IMG SRC = 'num0.gif' name='gd3'>");

	// GameOver
	document.write("<IMG SRC = 'cl.gif' name='gameoverbg0'>");

	// TitleLogo
	document.write("<IMG SRC = 'cl.gif' name='titlelogo0'>");
	
	// Flash
	document.write("<IMG SRC = 'cl.gif' name='flash0'>");

	// 得点アイテム
	for( i = 0; i < MAX_STAGE; i++ ) document.write("<IMG SRC = 'cl.gif' name='pitem"+i+"'>");

        // 音楽設定
	document.write("<bgsound id='bgm' loop='infinite' src=''>");

//	document.write("<audio id='audio' loop src='lookingmyway256.mp3' type='audio/mp3'></audio>");
//$("body").append("<audio id='audio' loop src='lookingmyway256.mp3' type='audio/mp3'></audio>");
$("body").append("<audio id='audio_OP' loop src='Asteroid_City.mp3' type='audio/mp3'></audio>");
$("body").append("<audio id='audio_TITLE_INIT' loop src='Ruins.mp3' type='audio/mp3'></audio>");

	// 画像の生成終了
	document.close();

	GDSetMessage();
	MsgItemNameSet();
	GDSetWepName();
	GDSetArmName();

	// MAP画像の初期位置合わせ
	GDSet( "background", 0, 0, 0 );
	GDSetMap();
	GDSetStep();
	GDSetDark();
	GDSetDarkMask();
	GDSetBreak();
	GDSetBF();
	GDSetLV();
	GDSetHP();
	GDSetEX();
	GDSetGD();
	GDSetHpBar();
	GDSetSrash();
	GDSetPItem();
	GDSetGameOver();
	GDSetTitleLogo();
	GDSetOp();
	GDSetEnding();
	GDSetFlash();

	PlayerImg = document.all("player0");
	GDSetPlayer();

	// プレイヤー攻撃パターン
	for( i = 0; i < 20; i++ ){
		player_at_img[i] = new Image();
		player_at_img[i].src = "player_at_"+i+".gif";
	}

	// DarkMask
	for( i = 0; i < 3; i++ ){
		darkmask_img[i] = new Image();
		darkmask_img[i].src = "darkmask"+i+".gif";
	}

	// パラメータ用の数字
	for( i = 0; i < 10; i++ ){
		pnum_img[i] = new Image();
		pnum_img[i].src = "num"+i+".gif";
	}

	// ダメージ用の数字
	for( i = 0; i < 10; i++ ){
		dmgnum_img[i] = new Image();
		dmgnum_img[i].src = "dmgnum"+i+".gif";
	}

	// 敵のやられエフェクト
	for( i = 0; i < 4; i++ ){
		break_img[i] = new Image();
		break_img[i].src = "break0"+i+".gif";
	}

	// Enemyデータを作成
	for( i = 0; i < ENEMY_MAX; i++ ){
		Enemy[i] = new UnitData();
		document.all("enemy"+i).style.position="absolute";
	}
	EnemyImageSetInit();

	// Itemデータを作成
	GDSetItem();
	for( i = 0; i <ITEM_MAX; i++ ){
		itemd[i] = new ItemData();
	}

	GDSetBox();
	for( i = 0; i < BOX_MAX; i++ ){
		boxd[i] = new ItemData();
	}

	GDSetMapDarkMargin();
	GDSetWall();

	// 明かり判定用のエリア作成
	for( i = 0; i < 15; i++ ) map_dark[i] = new Array(15);

	gamed.key_press = 0;
	gamed.mode = G_MODE_OP_INIT;
}


// ******************************************************
// ゲーム開始時の初期化 タイトル画面前に実行
// ******************************************************
function GameStartInit()
{

}

// ******************************************************
// ステージ初期化
// ******************************************************
function StageInit(){
	var i = 0;
	var j = 0;
	var tmp = 0;

	// 階段
	stepx = step_x_stage[gamed.stage];
	stepy = step_y_stage[gamed.stage];
	StepDraw();

	// マップチップのセット
	MapTipSetStage();
	
	// 壁のセット
	WallSetStage();

	// 壁
	if( gamed.stage == 19 ){
		for( i = 0; i < WallMax; i++ ){
			wall_x[i] = 18;
			wall_y[i] = 18;
			PosSetScreen("wall"+i, wall_x[i], wall_y[i]);
		}
	}
	else{
		tmp = Math.abs(Math.floor(Math.random()*2));
		for( i = 0; i < WallMax; i++ ){
			wall_x[i] = Math.abs(Math.floor(Math.random()*12+3));
			wall_y[i] = Math.abs(Math.floor(Math.random()*12+3));

			// 階段と重なる & 階段にたどり着けない状態 & 主人公が開始直後に動けない 状態を回避する
			SetStepPos(tmp,i);

			PosSetScreen("wall"+i, wall_x[i], wall_y[i]);
		}
	}
	tmp = 0;

	// 敵のデータセット

	EnemyDataSetInit();
	enemy_stage_cnt = 0;
	if( gamed.stage >= 0 && gamed.stage <= 1 ){
		EnemyImageSet(0,"bat");		// Ork
		EnemyImageSet(1,"slime2");	// Slime3 (yerrow)
		EnemyImageSet(2,"slime1");	// Slime2 (blue)
		if(gamed.stage == 1){
			EnemyImageSet(3,"boss-a");
			boss_get_cnt = boss_get_cnt_stagedata[0];
		}
		else{
			boss_get_cnt = 0;
		}
	}
	else if( gamed.stage >= 2 && gamed.stage <= 4 ){
		EnemyImageSet(0,"bat");	
		EnemyImageSet(1,"skeleton");
		EnemyImageSet(2,"ork");
		if(gamed.stage == 4){
			EnemyImageSet(3,"boss-b");
			boss_get_cnt = boss_get_cnt_stagedata[1];
		}
		else{
			boss_get_cnt = 0;
		}
	}
	else if( gamed.stage >= 5 && gamed.stage <= 8 ){
		EnemyImageSet(0,"ork");	
		EnemyImageSet(1,"slime0");	// Slime0 (red)
		EnemyImageSet(2,"ghost");
		if(gamed.stage == 8){
			EnemyImageSet(3,"boss-c");
			boss_get_cnt = boss_get_cnt_stagedata[2];
		}
		else{
			boss_get_cnt = 0;
		}
	}
	else if( gamed.stage >= 9 && gamed.stage <= 13 ){
		EnemyImageSet(0,"ghost");	
		EnemyImageSet(1,"lizardman");
		EnemyImageSet(2,"slime0");	// Slime0 (red)
		if(gamed.stage == 13){
			EnemyImageSet(3,"boss-d");
			boss_get_cnt = boss_get_cnt_stagedata[3];
		}
		else{
			boss_get_cnt = 0;
		}
	}
	else if( gamed.stage >= 14 && gamed.stage <= 18 ){
		EnemyImageSet(0,"lizardman");
		EnemyImageSet(1,"icegolem");
		EnemyImageSet(2,"b-ghost");
		if(gamed.stage == 18){
			EnemyImageSet(3,"boss-e");
			boss_get_cnt = boss_get_cnt_stagedata[4];
		}
		else{
			boss_get_cnt = 0;
		}
	}
	else if( gamed.stage == 19 ){
		EnemyImageSet(0,"b-ghost");	
		EnemyImageSet(1,"g-skele");
		EnemyImageSet(2,"hi-lizard");
		EnemyImageSet(3,"dragon");
		EnemyImageSet(4,"fire");
		boss_get_cnt = boss_get_cnt_stagedata[5];
	}

	for( i = 0; i < ENEMY_MAX; i++ ){
		EnemeStageDataSet(i);
		enemy_stage_cnt++;
	}

	// 敵撃破エフェクト
	ebreakcnt = -1;
	ebreakwait = 0;

	// アイテムデータのセット
	// ポーション
	if(Math.abs(Math.floor(Math.random()*2))==0) ItemDataSet(4,11,9,6);
	// 松明
	ItemDataSet(0,0,Math.abs(Math.floor(Math.random()*14)),Math.abs(Math.floor(Math.random()*14)));
	// 金貨
	ItemDataSet(2,1,Math.abs(Math.floor(Math.random()*14)),Math.abs(Math.floor(Math.random()*14)));

	// プレイヤー
	PlayerWeaponNameDraw();
	PlayerArmorNameDraw();
	PlayerDataSetStageInit(PLAYER_START_X,PLAYER_START_Y);
	MapDarkCheckInit(Player.light);
	MapDarkMarginCtrl();

//	BoxDataSet(0,gamed.stage,2,2);
	BoxDataInit();

	// メッセージウィンド
	MessageWindowDrawInit();

	pl_dmg_set = 0;
	pl_dmg_set_dmg = 0;

	gamed.cnt = 0;
	gamed.hit_dir = 0;
	gamed.r_item_set = 0;
	// 換金アイテムの処理 17
	if(gamed.stage==17) gamed.r_item_set = 1;
	gamed.r_item_tmp = 0;
	gamed.no_encount = 0;
	gamed.r_item_get = 0;
	gamed.e_item_get = 0;
	gamed.enemy_dead = 0;
	gamed.boss_get = 0;
	
	BFDraw();
//	PlayerLvDraw();
//	PlayerHpDraw();
//	PlayerWeaponNameDraw();
//	PlayerArmorNameDraw();
//	PlayerParaDraw("gd", Player.gold, 4);
//	PlayerParaDraw("ex", Player.exp, 4);
	
	gamed.mode = G_MODE_MAIN;	// 本編開始
}
function CheckStepPos(x,y)
{
	if( step_x_stage[gamed.stage] == x && step_y_stage[gamed.stage] == y ) return (1);
	else return (0);
}
function SetStepPos(tmp,i)
{
	if( tmp == 0 ){
		if( wall_x[i] == step_x_stage[gamed.stage] ){
			wall_x[i]++;
			if( wall_x[i] > 13 ) wall_x[i] = 3;
		}
		if( wall_x[i] == PLAYER_START_X ){
			wall_x[i]++;
			if( wall_x[i] > 13 ) wall_x[i] = 3;
		}
		
		if( CheckStepPos(wall_x[i],wall_y[i]) == 1 ) SetStepPos(tmp,i);
	}
	else{
		if( wall_y[i] == step_y_stage[gamed.stage] ){
			wall_y[i]++;
			if( wall_y[i] > 13 ) wall_y[i] = 3;
		}
		if( wall_y[i] == PLAYER_START_Y ){
			wall_y[i]++;
			if( wall_y[i] > 13 ) wall_y[i] = 3;
		}
		
		if( CheckStepPos(wall_x[i],wall_y[i]) == 1 ) SetStepPos(tmp,i);
	}
}
// EnemySet
function EnemeStageDataSet(i)
{
	var r_ex = 0;
	var r_ey = 0;
	var r_ed = 0;
	var r_ty = 0;

	r_ex = Math.abs(Math.floor(Math.random()*13+2));
	r_ey = Math.abs(Math.floor(Math.random()*13+2));
	r_ed = Math.abs(Math.floor(Math.random()*4));
	r_ty = Math.abs(Math.floor(Math.random()*3));

	if( gamed.stage >= 0 && gamed.stage <= 1 ){
		if(r_ty == 0) EnemyDataSetBat( i, r_ex, r_ey, r_ed, 0 );
		else if(r_ty == 1) EnemyDataSetSlime2( i, r_ex, r_ey, r_ed, 1 );
		else EnemyDataSetSlime1( i, r_ex, r_ey, r_ed, 2 );
	}
	else if( gamed.stage >= 2 && gamed.stage <= 4 ){
		if(r_ty == 0) EnemyDataSetBat( i, r_ex, r_ey, r_ed, 0 );
		else if(r_ty == 1) EnemyDataSetSkele( i, r_ex, r_ey, r_ed, 1 );
		else EnemyDataSetOrk( i, r_ex, r_ey, r_ed, 2 );
	}
	else if( gamed.stage >= 5 && gamed.stage <= 8 ){
		if(r_ty == 0) EnemyDataSetOrk( i, r_ex, r_ey, r_ed, 0 );
		else if(r_ty == 1) EnemyDataSetSlime0( i, r_ex, r_ey, r_ed, 1 );
		else EnemyDataSetGhost( i, r_ex, r_ey, r_ed, 2 );
	}
	else if( gamed.stage >= 9 && gamed.stage <= 13 ){
		if(r_ty == 0) EnemyDataSetGhost( i, r_ex, r_ey, r_ed, 0 );
		else if(r_ty == 1) EnemyDataSetLizardman( i, r_ex, r_ey, r_ed, 1 );
		else EnemyDataSetSlime0( i, r_ex, r_ey, r_ed, 2 );
	}
	else if( gamed.stage >= 14 && gamed.stage <= 18 ){
		if(r_ty == 0) EnemyDataSetLizardman( i, r_ex, r_ey, r_ed, 0 );
		else if(r_ty == 1) EnemyDataSetIceGolem( i, r_ex, r_ey, r_ed, 1 );
		else EnemyDataSetBGhost( i, r_ex, r_ey, r_ed, 2 );
	}
	else if( gamed.stage == 19 ){
		if(r_ty == 0) EnemyDataSetBGhost( i, r_ex, r_ey, r_ed, 0 );
		else if(r_ty == 1) EnemyDataSetGSkele( i, r_ex, r_ey, r_ed, 1 );
		else EnemyDataSetHiLizardman( i, r_ex, r_ey, r_ed, 2 );
	}

}
function WepArmSetCheck()
{
	if( gamed.e_item_get == 1 ) return(0);
	
	// Weapon
	if(gamed.stage == 0){
		if(gamed.enemy_dead >= get_weapon_cnt[0]) ItemDataSet(3,3,8,6);
	}
	else if(gamed.stage == 5){
		if(gamed.enemy_dead >= get_weapon_cnt[1]) ItemDataSet(3,4,8,6);
	}
	else if(gamed.stage == 10){
		if(gamed.enemy_dead >= get_weapon_cnt[2]) ItemDataSet(3,5,8,6);
	}
	else if(gamed.stage == 15){
		if(gamed.enemy_dead >= get_weapon_cnt[3]) ItemDataSet(3,6,8,6);
	}

	// Armor
	if(gamed.stage == 2){
		if(gamed.enemy_dead >= get_armor_cnt[0]) ItemDataSet(3,7,8,6);
	}
	else if(gamed.stage == 7){
		if(gamed.enemy_dead >= get_armor_cnt[1]) ItemDataSet(3,8,8,6);
	}
	else if(gamed.stage == 12){
		if(gamed.enemy_dead >= get_armor_cnt[2]) ItemDataSet(3,9,8,6);
	}
	else if(gamed.stage == 17){
		if(gamed.enemy_dead >= get_armor_cnt[3]) ItemDataSet(3,10,8,6);
	}
}

// ゲームマップ用の座標調整なし
function PosSet( name, x, y )
{
	document.all(name).style.left = x;
	document.all(name).style.top = y;
}

//プレーヤー表示？
// ゲームマップ用の座標調整あり
function PosSetScreen( name, x, y )
{
	document.all(name).style.left = x*32+MAPSCR_X;
	document.all(name).style.top = y*32+MAPSCR_Y;
}

// 
// 階段・主人公・壁と重ならない座標を得る
// データは rnd_x,rnd_y に格納
// 
function RandomPosSetXY()
{
	var i = 0;
	rnd_x = Math.abs(Math.floor(Math.random()*15));
	rnd_y = Math.abs(Math.floor(Math.random()*15));

	// 主人公の位置と重ならないかチェック
	if( HitCheck( rnd_x, rnd_y ) == 1 ){
		// 重なっていたらX軸を移動
		rnd_x++;
		if( rnd_x > 14 ) rnd_x = 0;
	}
	// 階段と 同上
	if( rnd_x == step_x_stage[gamed.stage] && rnd_y == step_y_stage[gamed.stage] ){
		rnd_x++;
		if( rnd_x > 14 ) rnd_x = 0;
	}
	// 壁と 同上
	RandomPosSetWall();
}
function RandomPosSetWall()
{
	var i = 0;
	for( i = 0; i < WallMax; i++ ){
		if( PosCheckWall(rnd_x,rnd_y) == 1){
			rnd_x++;
			if( rnd_x > 14 ) rnd_x = 0;
		}
	}
}
// 壁と座標がかぶっていないかのチェック
// 1 ... かぶっている
// 0 ... かぶってない
function PosCheckWall(x,y)
{
	var i = 0;
	for( i = 0; i < WallMax; i++ ){
		if( wall_x[i] == x && wall_y[i] == y ){
			return (1);
		}
	}
	return (0);
}


// ステージ毎のマップチップセット
function MapTipSetStage()
{
	for( i = 0; i < 225; i++ ){
		switch(gamed.stage){
		case 0:
		case 1:
			document.all("map"+i).src = "maptip0.gif";
			break;
		case 2:
		case 3:
			document.all("map"+i).src = "maptip1.gif";
			break;
		case 4:
		case 5:
		case 6:
			document.all("map"+i).src = "maptip2.gif";
			break;
		case 7:
		case 8:
		case 9:
			document.all("map"+i).src = "maptip3.gif";
			break;
		case 10:
		case 11:
		case 12:
			document.all("map"+i).src = "maptip4.gif";
			break;
		case 13:
		case 14:
		case 15:
			document.all("map"+i).src = "maptip5.gif";
			break;
		case 16:
		case 17:
			document.all("map"+i).src = "maptip6.gif";
			break;
		case 18:
		case 19:
			document.all("map"+i).src = "maptip7.gif";
			break;
		case 20:
			break;
		}
	}
}
// ステージ毎の壁セット
function WallSetStage()
{
	for( i = 0; i < WallMax; i++ ){
		switch(gamed.stage){
		case 0:
		case 1:
			document.all("wall"+i).src = "wall0.gif";
			break;
		case 2:
		case 3:
			document.all("wall"+i).src = "wall1.gif";
			break;
		case 4:
		case 5:
		case 6:
			document.all("wall"+i).src = "wall2.gif";
			break;
		case 7:
		case 8:
		case 9:
			document.all("wall"+i).src = "wall3.gif";
			break;
		case 10:
		case 11:
		case 12:
			document.all("wall"+i).src = "wall4.gif";
			break;
		case 13:
		case 14:
		case 15:
			document.all("wall"+i).src = "wall5.gif";
			break;
		case 16:
		case 17:
			document.all("wall"+i).src = "wall6.gif";
			break;
		case 18:
		case 19:
			document.all("wall"+i).src = "wall7.gif";
			break;
		case 20:
			break;
		}
	}
}


// 
// アイテムセット
// 
function ItemDataSet(i,type,x,y)
{
	if( i >= ITEM_MAX ) window.alert("Error : ItemDataSet");

	itemd[i].activ = 1;
	itemd[i].type = type;
	itemd[i].x = x;
	itemd[i].y = y;

	document.all("item"+i).src = item_name[type];
	PosSetScreen( "item"+i, itemd[i].x, itemd[i].y );
}

//
// 宝箱の初期化
//
function BoxDataInit()
{
	var i = 0;
	for( i = 0; i < BOX_MAX; i++ ){
		boxd[i].activ = 0;
		boxd[i].on = 0;
		boxd[i].type = 0;
		boxd[i].x = 0;
		boxd[i].xy= 0;
		document.all("box"+i).src = cl_img.src;
	}
}
//
// 宝箱セット
//
function BoxDataSet(i,type,x,y)
{
	if( i >= BOX_MAX ) window.alert("Error : BoxDataSet");

	boxd[i].activ = 1;
	boxd[i].on = 0;
	boxd[i].type = type;
	boxd[i].x = x;
	boxd[i].y = y;

	document.all("box"+i).src = box_c_img.src;
	PosSetScreen( "box"+i, boxd[i].x, boxd[i].y );
}

//
// 暗闇部分の初期化
//
function MapDarkSetInit()
{
	var di = 0;
	var dj = 0;
	var dtmp = 0;

	for( di = 0; di < 15; di++ ){
		for( dj = 0; dj < 15; dj++ ){
			map_dark[di][dj] = 1;
			document.all("dark"+dtmp).src = dark_img.src;
			dtmp++;
		}
	}
}
function MapDarkSetInit_Check()
{
	var i = 0;
	var j = 0;
	var tmp = 0;

	for( i = 0; i < 15; i++ ){
		for( j = 0; j < 15; j++ ){
			if( map_dark[i][j] == 0){
				document.all("dark"+tmp).src = dark_img.src;
			}
			tmp++;
		}
	}
}
//
// 明かり判定
// 	light...明かりの広さ
//
// ステージ開始時・松明ゲット時に
function MapDarkCheckInit(light)
{
	var set_x = 0;
	var set_y = 0;
	var i = 0;
	var j = 0;

	var margin_up = 0;		// 上余白
	var margin_down = 0;	// 下余白
	var margin_left = 0;	// 左余白
	var margin_right = 0;	// 右余白

	if( Player.dir == 0 ){	// 上
		margin_up = 0;
		margin_down = 2;
		margin_left = 1;
		margin_right = 1;
	}
	else if( Player.dir == 1 ){	// 下
		margin_up = 1;
		margin_down = 1;
		margin_left = 1;
		margin_right = 1;
	}
	else if( Player.dir == 2 ){	// 左
		margin_up = 1;
		margin_down = 1;
		margin_left = 0;
		margin_right = 2;
	}
	else if( Player.dir == 3 ){	// 右
		margin_up = 1;
		margin_down = 1;
		margin_left = 1;
		margin_right = 1;
	}

	set_x = Player.x - light - margin_left;
	set_y = Player.y - light - margin_up;

	if( set_x < 0 ) set_x = 0;
	if( set_y < 0 ) set_y = 0;

	for( i = set_x-1; i < Player.x+light+margin_right+1; i++ ){
		if( i > 14 || i < 0 ) continue;
		for( j = set_y-1; j < Player.y+light+margin_down+1; j++ ){
			if( j > 14 || j < 0 ) continue;
			if( map_dark[i][j] == 0 ){
				map_dark[i][j] = 1;
				//document.all("dark"+((j*15)+i)).style.display = "block";
				document.all("dark"+((j*15)+i)).src = dark_img.src;
			}
		}
	}

	for( i = set_x; i < Player.x+light+margin_right; i++ ){
		if( i > 14 ) continue;
		for( j = set_y; j < Player.y+light+margin_down; j++ ){
			if( j > 14 ) continue;
			if( map_dark[i][j] == 1 ){
				map_dark[i][j] = 0;
				//document.all("dark"+((j*15)+i)).style.display = "none";
				document.all("dark"+((j*15)+i)).src = cl_img.src;
			}
		}
	}
}
//
// 明かり判定
// 	light...明かりの広さ
//
// 歩く時に
function MapDarkCheck(light)
{
	var i = 0;
	var j = 0;
	var k = 0;

	if( Player.dir == 0 ){	// 上
		j = Player.y-Player.light;		// 上側
		k = Player.y+Player.light+2;	// 下側
		if( j < 0 || j > 14 ) j = -1;
		if( k < 0 || k > 14 ) k = -1;
		for( i = Player.x-Player.light-1; i < Player.x+Player.light+2; i++ ){
			if( i< 0 || i > 14 ) continue;

			// OPEN
			if( j != -1 ){
				map_dark[i][j] = 0;
				document.all("dark"+((j*15)+i)).src = cl_img.src;
			}
			// CLOSE
			if( k != -1 ){
				map_dark[i][k] = 1;
				document.all("dark"+((k*15)+i)).src = dark_img.src;
			}
		}
	}
	else if( Player.dir == 1 ){	// 下
		j = Player.y-Player.light-2;	// 上側
		k = Player.y+Player.light;		// 下側
		if( j < 0 || j > 14 ) j = -1;
		if( k < 0 || k > 14 ) k = -1;
		for( i = Player.x-Player.light-1; i < Player.x+Player.light+2; i++ ){
			if( i< 0 || i > 14 ) continue;

			// CLOSE
			if( j != -1 ){
				map_dark[i][j] = 1;
				document.all("dark"+((j*15)+i)).src = dark_img.src;
			}
			// OPEN
			if( k != -1 ){
				map_dark[i][k] = 0;
				document.all("dark"+((k*15)+i)).src = cl_img.src;
			}
		}
	}
	else if( Player.dir == 2 ){	// 左
		j = Player.x-Player.light;		// 左側
		k = Player.x+Player.light+2;	// 右側
		if( j < 0 || j > 14 ) j = -1;
		if( k < 0 || k > 14 ) k = -1;
		for( i = Player.y-Player.light-1; i < Player.y+Player.light+2; i++ ){
			if( i< 0 || i > 14 ) continue;

			// OPEN
			if( j != -1 ){
				map_dark[j][i] = 0;
				document.all("dark"+((i*15)+j)).src = cl_img.src;
			}
			// CLOSE
			if( k != -1 ){
				map_dark[k][i] = 1;
				document.all("dark"+((i*15)+k)).src = dark_img.src;
			}
		}
	}
	else if( Player.dir == 3 ){	// 右
		j = Player.x-Player.light-2;	// 上側
		k = Player.x+Player.light;		// 下側
		if( j < 0 || j > 14 ) j = -1;
		if( k < 0 || k > 14 ) k = -1;
		for( i = Player.y-Player.light-1; i < Player.y+Player.light+2; i++ ){
			if( i< 0 || i > 14 ) continue;

			// CLOSE
			if( j != -1 ){
				map_dark[j][i] = 1;
				document.all("dark"+((i*15)+j)).src = dark_img.src;
			}
			// OPEN
			if( k != -1 ){
				map_dark[k][i] = 0;
				document.all("dark"+((i*15)+k)).src = cl_img.src;
			}
		}
	}
}
function MapDarkMarginCtrl()
{
	var tmpx = 0;
	var tmpy = 0;

	if( Player.light == 1 ){
		tmpx = 64;
		tmpy = 64;
	}
	else if( Player.light == 2 ){
		tmpx = 96;
		tmpy = 96;
	}
	else if( Player.light == 3 ){
		tmpx = 128;
		tmpy = 128;
	}

	PosSet("darkmask0", (Player.x*32+MAPSCR_X)-tmpx, (Player.y*32+MAPSCR_Y)-tmpy );
}
function MsgItemNameSet()
{
	var i = 0;
	for( i = 0; i < MAX_STAGE; i++ ){
		msg_get_item_img[i] = new Image();
		item_list_name_img[i] = new Image();
		msg_get_item_img[i].src = "itemname"+i+".gif";
		item_list_name_img[i].src = "itemlist"+i+".gif";
	}
}

//
//
// 敵の画像データ
//
//
function EnemyImageSetInit()
{
	var i = 0;
	var j = 0;

	for( i = 0; i < ENEMY_MAX; i++ ){
		enemy_img[i] = new Array(12);
		for( j = 0; j < 12; j++ ){
			enemy_img[i][j] = new Image();
		}
	}
}
function EnemyImageSet(no, name)
{
	if(ENEMY_KIND<=no) window.alert("Error : EnemyImageSet");

	var i = 0;
	for( i = 0; i < 12; i++ ){
		enemy_img[no][i].src = "monster/"+name+""+i+".gif"
	}
}

//●プレイヤーのデータセット
function PlayerDataSet(){
	Player.lv = 1;
	if( gamed.debug == 1 ){
		Player.hp = 10000;
		Player.maxhp = 10000;
		Player.atk = 10000;
		Player.def = 10000;
	}
	else{
		Player.hp = 20;
		Player.maxhp = 20;
		Player.atk = 5;
		Player.def = 5;
	}
	Player.x = 0;
	Player.y = 0;
	Player.step = 0;
	Player.dir = 0;
	Player.attack = 0;
	Player.attack_wait = 0;
	Player.light = 1;
	Player.encount = 0;
	Player.movecnt = 0;
	Player.gold = 0;
	Player.exp = 0;
}
function PlayerDataSetStageInit(x,y)
{
	Player.x = x;
	Player.y = y;
	Player.step = 0;
	Player.dir = 0;
	Player.attack = 0;
	Player.attack_wait = 0;
}

function EnemyDataSetInit()
{
	var i = 0;
	for( i = 0; i < ENEMY_MAX; i++ ){
		Enemy[i].activ = 0;
		Enemy[i].type = 0;
		Enemy[i].x = 0;
		Enemy[i].y = 0;
		Enemy[i].dead = 0;
		Enemy[i].actioncnt = 0;
		Enemy[i].dmgdraw_wait = 0;
		Enemy[i].encount = 0;
		Enemy[i].encount_stop = 0;
		Enemy[i].re_wait = 0;
		Enemy[i].img_number = 0;
		Enemy[i].movecnt = 0;

		document.all("enemy"+i).display = "block";
		document.all("enemy"+i).src = cl_img.src;
	}
}

// *******************************************************
//
// 敵データのセット
//	no ... 通し番号 / type ... 種類 / 
//	maxhp -> dir ... 敵のパラメータ / img_number ... 絵の番号
//
// *******************************************************
function EnemyDataSet( no, type, maxhp, atk, def, exp, gold, sight, x, y, dir, img_number )
{
	Enemy[no].activ = 1;
	Enemy[no].type = type;
	Enemy[no].lv = 1;
	Enemy[no].hp = maxhp;
	Enemy[no].maxhp = maxhp;
	Enemy[no].atk = atk;
	Enemy[no].def = def;
	Enemy[no].exp = exp;
	Enemy[no].gold = gold;
	Enemy[no].sight = sight;
	Enemy[no].img_number = img_number;

	Enemy[no].x = x;
	Enemy[no].y = y;
	Enemy[no].dir = dir;
	Enemy[no].step = 0;
	Enemy[no].attack = 0;
	Enemy[no].attack_wait = 0;
	Enemy[no].dmgdraw_wait = 0;
	Enemy[no].actioncnt = 0;

	Enemy[no].dead = 0;
	Enemy[no].encount = 0;
	Enemy[no].encount_wall = 0;

	document.all("enemy"+no).src = enemy_img[img_number][0].src;
}

// オーク
function EnemyDataSetOrk(no,x,y,dir,img)
{
	EnemyDataSet( no, 0, 12,9,2, 3,3, 2, x,y,dir,img );
}
// スライム 赤 (強)
function EnemyDataSetSlime0(no,x,y,dir,img)
{
	EnemyDataSet( no, 1, 15,10,8, 4,4, 3,  x,y,dir,img );
}
// スライム 青 (弱)
function EnemyDataSetSlime1(no,x,y,dir,img)
{
	EnemyDataSet( no, 2, 4,1,1, 1,1, 3,  x,y,dir,img );
}
// スライム 黄色 (弱)
function EnemyDataSetSlime2(no,x,y,dir,img)
{
	EnemyDataSet( no, 3, 8,1,2, 1,2, 3,  x,y,dir,img );
}
// 骸骨
function EnemyDataSetSkele(no,x,y,dir,img)
{
	EnemyDataSet( no, 4, 8,10,2, 2,2, 2, x,y,dir,img );
}
// 骸骨 2
function EnemyDataSetGSkele(no,x,y,dir,img)
{
	EnemyDataSet( no, 5, 40,20,5, 10,10, 2,  x,y,dir,img );
}
// アイスゴーレム
function EnemyDataSetIceGolem(no,x,y,dir,img)
{
	EnemyDataSet( no, 6, 35,17,10, 8,8, 4, x,y,dir,img );
}
// 蝙蝠
function EnemyDataSetBat(no,x,y,dir,img)
{
	EnemyDataSet( no, 7, 8,7,1, 2,1, 6, x,y,dir,img );
}
// ゴースト
function EnemyDataSetGhost(no,x,y,dir,img)
{
	EnemyDataSet( no, 8, 19,8,9, 4,4, 4, x,y,dir,img );
}
// ゴースト 2
function EnemyDataSetBGhost(no,x,y,dir,img)
{
	EnemyDataSet( no, 9, 35,12,15, 10,10, 4, x,y,dir,img );
}
// 蜥蜴男
function EnemyDataSetLizardman(no,x,y,dir,img)
{
	EnemyDataSet( no, 10, 15,15,5, 5,5, 2, x,y,dir,img );
}
// 蜥蜴男 2
function EnemyDataSetHiLizardman(no,x,y,dir,img)
{
	EnemyDataSet( no, 11, 45,25,10, 10,10, 2, x,y,dir,img );
}

// ボス A
function EnemyDataSetBossA(no,x,y,dir,img)
{
	EnemyDataSet( no, 12, 14,8,3, 10,10, 4, x,y,dir,img );
}
// ボス B
function EnemyDataSetBossB(no,x,y,dir,img)
{
	EnemyDataSet( no, 13, 25,9,5, 20,20, 4, x,y,dir,img );
}
// ボス C
function EnemyDataSetBossC(no,x,y,dir,img)
{
	EnemyDataSet( no, 14, 30,10,7, 30,30, 4, x,y,dir,img );
}
// ボス D
function EnemyDataSetBossD(no,x,y,dir,img)
{
	EnemyDataSet( no, 15, 35,11,9, 40,40, 4, x,y,dir,img );
}
// ボス E
function EnemyDataSetBossE(no,x,y,dir,img)
{
	EnemyDataSet( no, 16, 45,12,12, 50,50, 4, x,y,dir,img );
}
// ボス ドラゴン
function EnemyDataSetDragon(no,x,y,dir,img)
{
	EnemyDataSet( no, 17, 99,19,15, 99,99, 6,  x,y,dir,img );
}
// ドラゴンの火
function EnemyDataSetFire(no,x,y,dir,img,step)
{
	EnemyDataSet( no, 18, 999,200,999, 0,0, 0, x,y,dir,img );
	Enemy[no].step = step;
}

// 画像
function GDSet( name, no, x, y )
{
	document.all(name+no).style.position="absolute";
	document.all(name+no).style.left = x;
	document.all(name+no).style.top = y;
}
function GDSetFlash()
{
	GDSet( "flash", 0, MAPSCR_X, MAPSCR_Y );
}
function GDSetTitleLogo()
{
	GDSet( "titlelogo", 0, MAPSCR_X, MAPSCR_Y );
}
function GDSetOp()
{
	GDSet( "opback", 0, MAPSCR_X, MAPSCR_Y );
	GDSet( "opfont", 0, MAPSCR_X, MAPSCR_Y );
}
function GDSetEnding()
{
	GDSet( "edback", 0, MAPSCR_X, MAPSCR_Y );
	GDSet( "edfont", 0, MAPSCR_X, MAPSCR_Y );
	GDSet( "edfin", 0, MAPSCR_X+480-91, MAPSCR_Y+480-50 );
}
function GDSetWepName()
{
	GDSet( "wepname", 0, 148, 538 );
}
function GDSetArmName()
{
	GDSet( "armname", 0, 286, 538 );
}
function GDSetGameOver()
{
	GDSet( "gameoverbg", 0, MAPSCR_X, MAPSCR_Y );
}
function GDSetPlayer()
{
	GDSet( "player", 0, Player.x+MAPSCR_X, Player.y+MAPSCR_Y );
}
function GDSetMessage()
{
	GDSet( "msgwindow", 0, 0, 500 );
	GDSet( "msgget", 0, 0, 500 );
	GDSet( "msggetitemname", 0, 0, 500 );
}
function GDSetStep()
{
	GDSet( "step", 0, 600,0 );
}
function GDSetDarkMask()
{
	GDSet( "darkmask", 0, 480,450 );
}
function GDSetBreak()
{
	GDSet( "break", 0, 600,0 );
}
/*
function GDSetPlayerDamage()
{
	GDSet( "dmgnum", 0, Player.old_x*32+MAPSCR_X,	Player.old_y*32+MAPSCR_Y-11 );
	GDSet( "dmgnum", 1, Player.old_x*32+MAPSCR_X+8,	Player.old_y*32+MAPSCR_Y-11 );
	GDSet( "dmgnum", 2, Player.old_x*32+MAPSCR_X+16,Player.old_y*32+MAPSCR_Y-11 );
}
*/
function GDSetPlayerDamage()
{
	GDSet( "dmgnum", 0, Player.x*32+MAPSCR_X,	Player.y*32+MAPSCR_Y-11 );
	GDSet( "dmgnum", 1, Player.x*32+MAPSCR_X+8,	Player.y*32+MAPSCR_Y-11 );
	GDSet( "dmgnum", 2, Player.x*32+MAPSCR_X+16,Player.y*32+MAPSCR_Y-11 );
}
function GDSetEnemyDamage(i)
{
	GDSet( "edmgnum", 0, Enemy[i].x*32+MAPSCR_X,	Enemy[i].y*32+MAPSCR_Y-11 );
	GDSet( "edmgnum", 1, Enemy[i].x*32+MAPSCR_X+8,	Enemy[i].y*32+MAPSCR_Y-11 );
	GDSet( "edmgnum", 2, Enemy[i].x*32+MAPSCR_X+16,	Enemy[i].y*32+MAPSCR_Y-11 );
}
function GDSetSrash()
{
	GDSet( "srash", 0,600,0 );
}
function GDSetMap()
{
	var i = 0;
	var j = 0;
	var tmp = 0;
	for( i = 0; i < 15; i++ ){
		for( j = 0; j < 15; j++ ){
			GDSet( "map", tmp, j*32+MAPSCR_X, i*32+MAPSCR_Y );
			tmp++;
		}
	}	
}
function GDSetDark()
{
	var i = 0;
	var j = 0;
	var tmp = 0;
	for( i = 0; i < 15; i++ ){
		for( j = 0; j < 15; j++ ){
			GDSet( "dark", tmp, j*32+MAPSCR_X, i*32+MAPSCR_Y );
			tmp++;
		}
	}	
}
function GDSetPItem()
{
	var i = 0;
	for( i = 0; i < MAX_STAGE; i++ ) GDSet( "pitem", i, 520,74+(20*i) );
}
function GDSetMapDarkMargin()
{
	var i = 0;
	for( i = 0; i < 14; i++ ) GDSet( "mapdark_margin", i, 600,0 );
}
function GDSetWall()
{
	var i = 0;
	for( i = 0; i < WallMax; i++ ){
		GDSet( "wall", i, 600,0 );
	}
}
function GDSetItem()
{
	var i = 0;
	for( i = 0; i < ITEM_MAX; i++ ){
		GDSet( "item", i, 600, 0 );
	}
}
function GDSetBox()
{
	var i = 0;
	for( i = 0; i < BOX_MAX; i++ ){
		GDSet( "box", i, 600, 0 );
	}
}
function GDSetBF()
{
	GDSet( "bf", 0, 37, 527 );
	GDSet( "bf", 1, 37+13, 527 );
}
function GDSetLV()
{
	GDSet( "lv", 0, 162, 517 );
	GDSet( "lv", 1, 162+13, 517 );
}
function GDSetHP()
{
	GDSet( "hp", 0, 242, 517 );
	GDSet( "hp", 1, 242+13, 517 );
	GDSet( "hp", 2, 242+26, 517 );
}
function GDSetEX()
{
	GDSet( "ex", 0, 453, 517 );
	GDSet( "ex", 1, 453+13, 517 );
	GDSet( "ex", 2, 453+26, 517 );
	GDSet( "ex", 3, 453+39, 517 );
}
function GDSetGD()
{
	GDSet( "gd", 0, 453, 539 );
	GDSet( "gd", 1, 453+13, 539 );
	GDSet( "gd", 2, 453+26, 539 );
	GDSet( "gd", 3, 453+39, 539 );
}
function GDSetHpBar()
{
	var i = 0;
	for( i = 0; i < 100; i++ ){
		GDSet( "hpbar", i , 387-i, 522 );
	}
}

// ******************************************************
//
// メッセージウィンド初期化
//
// ******************************************************
function MessageWindowDrawInit()
{
	msgd.activ = 0;
	msgd.wait = 0;
}
// ******************************************************
//
// メッセージウィンド表示
//
// type ... 0:WEP 1:ARM 2:ITEM
// no   ... Number
//
// ******************************************************
function MessageWindowDraw(type,no)
{
	msgd.activ = 1;
	msgd.x = 170;
	msgd.y = 150;
	msgd.wait = MSG_DRAW_WAIT;

	document.all("msgwindow0").src = msg_window_img.src;
	document.all("msgget0").src = msg_get_img.src;

	if( type == 0 ){
		if( type > 3) window.alert("Error : MessageWindowDraw");
		document.all("msggetitemname0").src = msg_get_wep_img[no].src;
	}
	else if( type == 1 ){
		if( type > 3) window.alert("Error : MessageWindowDraw");
		document.all("msggetitemname0").src = msg_get_arm_img[no].src;
	}
	else if( type == 2 ){
		if( type > MAX_STAGE-1) window.alert("Error : MessageWindowDraw");
		document.all("msggetitemname0").src = msg_get_item_img[no].src;
	}

	PosSet("msgwindow0", msgd.x, msgd.y);
	PosSet("msggetitemname0", msgd.x+10, msgd.y+17);
	PosSet("msgget0", msgd.x+190, msgd.y+17);
}

// ******************************************************
//
// メッセージウィンドコントロール
//
// ******************************************************
function MessageWindowDrawCtrl()
{
	if( msgd.activ == 0 ) return(0);

	msgd.wait--;
	if( msgd.wait < 0 ){
		MessageWindowDrawInit();
		document.all("msgwindow0").src = cl_img.src;
		document.all("msgget0").src = cl_img.src;
		document.all("msggetitemname0").src = cl_img.src;
	}
}

// ******************************************************
//
// キー
//
// ******************************************************
function Key()
{
	if( Player.attack_wait > 0)return(0);
	if( Player.movecnt > 0)return(0);
	if( ebreakcnt > 0)return(0);
//	if( ebreakcnt >= 0 )return (0);
//alert(key_code);

	if( key_code==38 || key_code==57){	// UP
		press_key = 0;
		// 換金アイテムの処理 15
		// 換金アイテムの処理 16
		if(gamed.stage==15 || gamed.stage==16){
			gamed.r_item_tmp = 0;
		}
	}
	else if( key_code==40 || key_code==51){	// DOWN
		press_key = 1;
		if(gamed.stage==15 || gamed.stage==16){
			if(gamed.r_item_tmp == 1 ) gamed.r_item_tmp = 2;
		}
	}
	else if( key_code==37 || key_code==53 ){	// LEFT
		press_key = 2;
		if(gamed.stage==15){
			if(gamed.r_item_tmp == 2 ) gamed.r_item_set = 1;
		}
		else if(gamed.stage==16){
			if(gamed.r_item_tmp == 0 ) gamed.r_item_tmp = 1;
		}
	}
	else if( key_code==39 || key_code==55 ){	// RIGHT
		press_key = 3;
		if(gamed.stage==15){
			if(gamed.r_item_tmp == 0 ) gamed.r_item_tmp = 1;
		}
		else if(gamed.stage==16){
			if(gamed.r_item_tmp == 2 ) gamed.r_item_set = 1;
		}
	}
	else{
		press_key = -1;
	}

	if( press_key != -1 ){
		// 換金アイテム入手に関する処理
		// 換金アイテムの処理 0 / 7 / 12
		if( gamed.r_item_get == 0 ){
			gamed.no_encount++;
			if( gamed.stage == 0 && gamed.no_encount == 10 ) gamed.r_item_set = 1;
			if( gamed.stage == 7 && gamed.no_encount == 20 ) gamed.r_item_set = 1;
			if( gamed.stage == 12 && gamed.no_encount == 30 ) gamed.r_item_set = 1;
		}

		LightCtrl();
		PlayerMove();
		PlayerPat();

		EnemyMove();
	}
}

/*
function KdwnCheck()
{
	//if( Player.attack_wait > 0 || Player.movecnt > 0 || ebreakcnt > 0 || ebreakcnt >= 0 ) return (0);
	key_code = event.keyCode;
	gamed.key_press = 1;
}

function KupCheck()
{
	if( key_code == event.keyCode ){
		key_code = -1;
	}
}
*/

// *************************************
// メインループ
// *************************************
function Main(){
 // オープニング初期化
	if( gamed.mode == G_MODE_OP_INIT ){
		bgm.src="bgm/PSMAT018.mid";
		OpInit();
 // オープニング
	}else if( gamed.mode == G_MODE_OP ){
		OpMain();
 // タイトル初期化
	}else if( gamed.mode == G_MODE_TITLE_INIT ){
//
$("#audio_OP").get(0).pause();
$("#audio_TITLE_INIT").get(0).play();
		bgm.src="bgm/PSMAT020.mid";
		TitleInit();
 // タイトル
	}else if( gamed.mode == G_MODE_TITLE ){
		TitleMain();
 // ステージ初期化
	}else if( gamed.mode == G_MODE_MAIN_INIT ){
		if( gamed.stage <= 10 ) bgm.src="bgm/PSMAT070.mid";
		else if( gamed.stage <= 15 ) bgm.src="bgm/PSMAT037.mid";
		else if( gamed.stage == 19 ) bgm.src="bgm/PSMAT019.mid";
		StageInit();
 // 本編
	}else if( gamed.mode == G_MODE_MAIN ){
		GameMain();
 // ゲームオーバー
	}else if( gamed.mode == G_MODE_GAMEOVER ){
		if(gamed.go_flg == 0) bgm.src="bgm/PSMAT034.mid";
		GameOver();
 // ゲームクリア
	}else if( gamed.mode == G_MODE_GAMECLEAR_INIT ){
		bgm.src="bgm/PSMAT067.mid";
		GameClearInit();
	}else if( gamed.mode == G_MODE_GAMECLEAR_MAIN ){
		GameClearMain();
	}else{
		window.alert("Error : Main() !");
	}

	setTimeout("Main()",20);
}
// *************************************
// オープニング関係
// *************************************
//●オープニング初期化関数。
function OpInit(){
	document.all("opback0").src = opback_img.src;
	gamed.op_flg = 0;
	opfont_x = 15;
	opfont_y = 490;
	gamed.key_press = 0;
	gamed.mode = G_MODE_OP;
	//window.alert("op init done");
}
var wait_opening_now=0;
//●オープニングメイン関数。
function OpMain(){
	if(gamed.op_flg==0){
		wait_opening_now+=20;
		if(wait_opening_now>WAIT_OPENING || gamed.key_press==1){
			wait_opening_now=0;
			gamed.op_flg=1;
			gamed.key_press=0;
			document.all("opback0").src = "opback2.gif";
			PosSet("opfont0",opfont_x,opfont_y);
			document.all("opfont0").src = "op.gif";
		}
 //WAIT_OPENING 秒経過後またはキープレスイベント発生後。
	}else if(gamed.op_flg==1){
		if(gamed.key_press==1){
			gamed.key_press=0;
			wait_opening_now+=5;
			opfont_y-=wait_opening_now;
		}

		if( opfont_y > MAPSCR_Y-OPENING_STORY_H-40 ) opfont_y--;
		else{
			gamed.op_flg=2;
			opfont_y=MAPSCR_Y-OPENING_STORY_H-40;
		}

		PosSet("opfont0",opfont_x,opfont_y);
	}else if(gamed.op_flg==2){
		//if( gamed.key_press == 1 ){
			gamed.key_press = 0;
			document.all("opfont0").src = cl_img.src;
			document.all("opback0").src = cl_img.src;
			gamed.mode = G_MODE_TITLE_INIT;
			key_code = -1;
		//}
	}
}
// *************************************
// エンディング関係
// *************************************
function GameClearInit()
{
	document.all("edback0").src = edback_img.src;
	edfont_x = MAPSCR_X;
	edfont_y = 490;
	gamed.key_press = 0;
	gamed.ed_flg = 0;
	gamed.mode = G_MODE_GAMECLEAR_MAIN;
}
function GameClearMain()
{
	if( gamed.ed_flg == 0 ){
		if( gamed.key_press == 1 ){
			gamed.key_press = 0;
			gamed.ed_flg = 1;

			document.all("edback0").src = "edback2.gif";
			document.all("edfont0").src = "ed.gif";
			PosSet("edfont0",edfont_x,edfont_y);
		}
	}
	else if( gamed.ed_flg == 1 ){
		if( gamed.key_press == 1 ){
			gamed.key_press = 0;
			edfont_y -= 10;
		}

		if( edfont_y > MAPSCR_Y-ENDING_STORY_H-40 ) edfont_y--;
		else{
			edfont_y = MAPSCR_Y-ENDING_STORY_H-40;
			gamed.ed_flg = 2;
			document.all("edfin0").src = "ed_fin.gif";
		}

		PosSet("edfont0",edfont_x,edfont_y);
	}
	else if( gamed.ed_flg == 2 ){
		gamed.ed_flg = 3;
		window.alert(STR_GAME_CLEAR);
		window.alert(STR_ITEMTOGOLD);
		ItemToGold();
		window.alert(gamed.pi_gld+STR_ITEMTOGOLD_END);
		Ranking();
	}
	else if( gamed.ed_flg == 3 ){
	}
}
// 得点アイテムの換金処理
function ItemToGold()
{
	var i = 0;
	gamed.pi_gld = 0;
	for( i = 0; i < MAX_STAGE; i++ ){
		if( gamed.pitem[i] == 1 ){
			Player.gold += pitem_points[i];
			gamed.pi_gld += pitem_points[i];
			PlayerParaDraw("gd", Player.gold, 4);
		}
	}
}
function Ranking()
{
	document.send.tokuten.value=Player.gold;
	window.document.forms["send"].submit();
}
// *************************************
// ゲームオーバー関係
// *************************************
function GameOver()
{
	if( gamed.go_flg == 0 ){
		window.alert(STR_GAME_OVER);
		window.alert(STR_ITEMTOGOLD);
		ItemToGold();
		window.alert(gamed.pi_gld+STR_ITEMTOGOLD_END);
		//window.alert("ランキングの処理");
		Ranking();
		//gamed.mode = G_MODE_TITLE_INIT;
		gamed.go_flg = 1;
	}
	else if( gamed.go_flg == 1 ){
	}
}
// *************************************
// タイトル関係
// *************************************
function TitleInit()
{
	// 階段座標のセット
	for( i = 0; i < MAX_STAGE; i++ ){
		step_x_stage[i] = Math.abs(Math.floor(Math.random()*13+2));
		step_y_stage[i] = Math.abs(Math.floor(Math.random()*13+2));
	}
	step_x_stage[MAX_STAGE-1] = 18;
	step_y_stage[MAX_STAGE-1] = 18;

	PlayerDataSet();
	PlayerLvDraw();
	PlayerHpDraw();
	PlayerHpBarDraw();

	MapDarkSetInit();
	MapDarkCheck(Player.light);

	gamed.cnt = 0;
	if(gamed.debug2 == 1){
		gamed.stage = 19;
	}
	else{
		gamed.stage = 0;
	}
	gamed.gameover = 0;
	gamed.gameclear = 0;
	gamed.key_press = 0;
	for(i = 0; i < MAX_STAGE; i++ ) gamed.pitem[i] = 0;
	PItemDrawCheck();

	document.all("edback0").src = cl_img.src;
	document.all("edfont0").src = cl_img.src;
	document.all("titlelogo0").src = titlelogo_img.src;
	document.all("darkmask0").src = "darkmask0.gif";
	document.all("srash0").src = cl_img.src;
	document.all("wepname0").src = cl_img.src;
	document.all("armname0").src = cl_img.src;
	document.all("dmgnum0").src = cl_img.src;
	document.all("dmgnum1").src = cl_img.src;
	document.all("dmgnum2").src = cl_img.src;
	document.all("edmgnum0").src = cl_img.src;
	document.all("edmgnum1").src = cl_img.src;
	document.all("edmgnum2").src = cl_img.src;
	document.all("gameoverbg0").src = cl_img.src;

	BFDraw();
	PlayerLvDraw();
	PlayerHpDraw();
	PlayerWeaponNameDraw();
	PlayerArmorNameDraw();
	PlayerParaDraw("gd", Player.gold, 4);
	PlayerParaDraw("ex", Player.exp, 4);

	key_press = -1;
	key_code = -1;
	gamed.mode = G_MODE_TITLE;
}
function TitleMain()
{
	window.alert(STR_GAME_START);
	document.all("titlelogo0").src = cl_img.src;
	gamed.mode = G_MODE_MAIN_INIT;
}
// *************************************
// 本編関係
// *************************************
function GameMain()
{
	// GameClear
	if(gamed.gameclear == 1){
		//document.all("edback0").src = edback_img.src;
		//window.alert("ENDING の処理");
		gamed.mode = G_MODE_GAMECLEAR_INIT;
		return(1);
	}

	// GameOver
	if(gamed.gameover == 1){
		document.all("gameoverbg0").src = gameover_img.src;
		gamed.go_flg = 0;
		gamed.mode = G_MODE_GAMEOVER;
		return(1);
	}

	// 普段は 0
	if( flash_on == 1 ){	// FLASH 付ける
		document.all("flash0").src = flash_img.src;
		flash_cnt = 0;
		flash_on = 2;
	}
	else if( flash_on == 2 ){
		flash_cnt--;
		if( flash_cnt <= 0 ){
			flash_on = 3;
		}
	}
	else if( flash_on == 3 ){	// FLSAH 消す
		document.all("flash0").src = cl_img.src;
		flash_cnt = 0;
		flash_on = 0;
	}

	if(msgd.activ == 0){
		Key();
		RItemSet();
		WepArmSetCheck();

		if( pl_dmg_set == 1 ){
			PlayerDamage(pl_dmg_set_dmg);
			pl_dmg_set = 0;
			pl_dmg_set_dmg = 0;
		}
		
		PlayerPat();
		PlayerDamageDrawCtrl();
//ここでプレーヤー移動処理？
		PlayerMoveCtrl();

		EnemyActionCtrl();
		EnemyAttackPatCtrl();
		EnemyBreakCtrl();
	}

	SrashCtrl();
	MessageWindowDrawCtrl();

	gamed.cnt++;
	if( gamed.cnt > 999999999999999 ) gamed.cnt = 0;
}

function LightCtrl()
{
	if( Player.light > 1 ){
		gamed.lightcnt--;
		if( gamed.lightcnt < 0 ){
			Player.light--;
			gamed.lightcnt = LIGHT_CNT;
			if( Player.light < 1 ) Player.light = 1;

			MapDarkSetInit();
			document.all("darkmask0").src = darkmask_img[Player.light-1].src;
			MapDarkCheckInit(Player.light);
			MapDarkMarginCtrl();
		}
	}
}

// 換金アイテム出現
function RItemSet()
{
	if(gamed.r_item_get == 1) return(0);

	if(gamed.r_item_set == 1){
		BoxDataSet(0,gamed.stage,2,2);
		gamed.r_item_get = 1;
	}
}

// プレイヤーのパラメータ表示関連
function PlayerWeaponNameDraw()
{
	if( Player.weapon <= 0 ){
		document.all("wepname0").src = cl_img.src;
	}
	else{
		document.all("wepname0").src = eq_wep_img[Player.weapon-1].src;
	}
}
function PlayerArmorNameDraw()
{
	if( Player.armor <= 0 ){
		document.all("armname0").src = cl_img.src;
	}
	else{
		document.all("armname0").src = eq_arm_img[Player.armor-1].src;
	}
}

// 数値関連
function PlayerLvDraw()
{
	PlayerParaDraw("lv", Player.lv, 2);
}
function PlayerHpDraw()
{
	PlayerParaDraw("hp", Player.hp, 3);
}
function BFDraw()
{
	PlayerParaDraw("bf", gamed.stage+1, 2);
}
function PlayerParaDraw(name,points,fig)
{
	var tmp = 0;
	var name_n = 0;

	if( fig >= 4 ){
		if(points < 1000) tmp = 0;
		else tmp = Math.floor((points/1000)%10);
		if(tmp < 0) tmp = 0;
		else if( tmp > 9 ) tmp = 9;
		document.all(name+name_n).src = pnum_img[tmp].src;
		name_n++;
	}

	if( fig >= 3 ){
		if(points < 100) tmp = 0;
		else tmp = Math.floor((points/100)%10);
		if(tmp < 0) tmp = 0;
		else if( tmp > 9 ) tmp = 9;
		document.all(name+name_n).src = pnum_img[tmp].src;
		name_n++;
	}

	if( fig >= 2 ){
		if(points < 10) tmp = 0;
		else tmp = Math.floor((points/10)%10);
		if(tmp < 0) tmp = 0;
		else if( tmp > 9 ) tmp = 9;
		document.all(name+name_n).src = pnum_img[tmp].src;
		name_n++;
	}

	tmp = points%10;
	if(tmp < 0) tmp = 0;
	else if( tmp > 9 ) tmp = 9;
	document.all(name+name_n).src = pnum_img[tmp].src;
}
// HP BAR
function PlayerHpBarDraw()
{
	var per = 0;
	var i = 0;

	per = Math.floor((Player.hp/Player.maxhp)*100);
	
	for( i = 0; i < 100; i++ ){
		if( per < i ) document.all("hpbar"+i).src = "hpbar2.gif";
		else document.all("hpbar"+i).src = "hpbar.gif";
	}
}

// プレイヤー被ダメ
function PlayerDamage(damage)
{
	flash_on = 1;
	Player.hp -= damage;
	if( Player.hp <= 0 ){
		Player.hp = 0;
		gamed.gameover = 1;
	}

	PlayerDamageDrawStart(damage);
	PlayerHpDraw();
	PlayerHpBarDraw();
}
// プレイヤー被ダメ表示
function PlayerDamageDrawStart( dmg )
{
	var hp = 0;

	if(dmg < 100) document.all("dmgnum0").src = cl_img.src;
	else{
		hp = Math.floor((dmg/100)%10);
		if(hp>9) hp=9;
		document.all("dmgnum0").src = dmgnum_img[hp].src;
	}

	if(dmg < 10) document.all("dmgnum1").src = cl_img.src;
	else{
		hp = Math.floor((dmg/10)%10);
		if(hp>9) hp=9;
		document.all("dmgnum1").src = dmgnum_img[hp].src;
	}

	hp = dmg%10;
	if(hp>9) hp=9;
	document.all("dmgnum2").src = dmgnum_img[hp].src;

	GDSetPlayerDamage();
	Player.dmgdraw_wait = 4;
}
function PlayerDamageDrawCtrl()
{
	if( Player.dmgdraw_wait > 0 ){
		Player.dmgdraw_wait--;
		GDSetPlayerDamage();
		if( Player.dmgdraw_wait <= 0 ){
			document.all("dmgnum0").src = cl_img.src;
			document.all("dmgnum1").src = cl_img.src;
			document.all("dmgnum2").src = cl_img.src;
		}
	}
}

//●レベルアップ処理。
function PlayerLvUpCheck()
{
	if( Player.exp > lv_up_exp[Player.lv-1] ){
		Player.lv++;
		Player.maxhp+=UP_HP;
		if(UP_HP<7){
			UP_HP=UP_HP+1;
		}
		Player.hp=Player.maxhp;

		var rnd=0;
		rnd=Math.floor(Math.random(1)*10);
		if(rnd<7){
alert("攻撃力がアップした");
			Player.atk++;
		}else{
alert("防御力がアップした");
			Player.def++;
		}
		
		PlayerLvDraw();
		PlayerHpDraw();
		PlayerHpBarDraw();
		if( Player.exp > lv_up_exp[Player.lv-1] ) PlayerLvUpCheck();
	}
}

//
// プレイヤーパターン
//
function PlayerPat()
{
	// 攻撃時
	if( Player.attack > 0 ){
		Player.attack_wait--;
		PlayerImg.src = player_at_img[Player.dir*5+(4-Player.attack_wait)].src;

		if( Player.attack_wait <= 0 ){
			Player.attack = 0;
			Player.attack_wait = 0;
		}
	}
	else{
		// 歩きパターン
		if( Player.step == 0 && gamed.cnt%4==0 ){
			Player.step = 1;
			//PlayerImg.src = imgs[player_image_no+Player.dir*2+Player.step].src;
		}
		else if(Player.step == 1 && gamed.cnt%4==0) {
			Player.step = 0;
			//PlayerImg.src = imgs[player_image_no+Player.dir*2+Player.step].src;
		}
		PlayerImg.src = imgs[player_image_no+Player.dir*2+Player.step].src;
	}
}

//
// プレイヤー移動
//
function PlayerMove()
{
	if( Player.attack_wait > 0 || Player.movecnt > 0 ) return (0);

	Player.movecnt = 0;
	Player.old_x = Player.x;
	Player.old_y = Player.y;

	if( press_key == 0 ){	// UP
		Player.y -= 1;
		Player.dir = 0;
		// 換金アイテムの処理 6
		if(gamed.stage==6){
			gamed.r_item_tmp++;
			if( gamed.r_item_tmp == 20 ){
				gamed.r_item_set = 1;
			}
		}
	}
	if( press_key == 1 ){	// DOWN
		Player.y += 1;
		Player.dir = 1;
	}
	if( press_key == 2 ){	// LEFT
		Player.x -= 1;
		Player.dir = 2;
	}
	if( press_key == 3 ){	// RIGHT
		Player.x += 1;
		Player.dir = 3;
	}

	// 換金アイテムの処理 5 / 14
	if(gamed.stage==5 || gamed.stage==14){
		if( Player.x == 1 && Player.y == 1 ){
			gamed.r_item_set = 1;
		}
	}
	
	HitCheckItem();
	if(HitCheckWall() == 1 || HitCheckBox() == 1 || HitCheckEnemy() == 1 || HitCheckMapEdge(Player.x,Player.y) == 1){
		Player.x = Player.old_x;
		Player.y = Player.old_y;
		playerx_enemy_hitcheck = Player.x;	// 移動前の座標
		playery_enemy_hitcheck = Player.y;
		Player.attack = player_attack_no;
		Player.attack_wait = 5;
		Player.step = 1;
		Player.movecnt = 0;
	}
	else{
		MapDarkCheck(Player.light);
		Player.movecnt = 4;
		playerx_enemy_hitcheck = Player.x;	// 移動後の座標
		playery_enemy_hitcheck = Player.y;
		Player.x = Player.old_x;
		Player.y = Player.old_y;
	}

	return (1);
}

//プレーヤーの移動？masaya
function PlayerMoveCtrl()
{
	if( Player.movecnt > 0 ){
		if( press_key == 0 ){	// UP
			if( Player.y > 0 ) Player.y -= 0.25;
			Player.dir = 0;
		}
		if( press_key == 1 ){	// DOWN
			if(Player.y < 14) Player.y += 0.25;
			Player.dir = 1;
		}
		if( press_key == 2 ){	// LEFT
			if( Player.x > 0 ) Player.x -= 0.25;
			Player.dir = 2;
		}
		if( press_key == 3 ){	// RIGHT
			if(Player.x < 14) Player.x += 0.25;
			Player.dir = 3;
		}
		Player.movecnt--;

		MapDarkMarginCtrl();

		if( Player.movecnt == 0 ){
			if( HitCheckStep() == 1 ){
				if( gamed.stage != MAX_STAGE-1 ){
					PosSetScreen("player0", Player.x, Player.y );
					if( window.confirm("下の階に降りますか？") ){
						//window.alert("降りた処理");
						MapDarkSetInit();
						gamed.stage++;
						gamed.mode = G_MODE_MAIN_INIT;
						press_key = -1;
						key_code = -1;
						Player.dir = 0;
						Player.step = 1;
						Player.movecnt = 0;
						BFDraw();
					}
					else{
						//window.alert("降りなかった処理");
						press_key = -1;
						key_code = -1;
						Player.movecnt = 0;
					}
				}
			}
		}
	}

console.log(Player.x);
//プレーヤー表示？
	PosSetScreen("player0", Player.x, Player.y );
}

// プレイヤーとの当たり判定
function HitCheck( hx, hy )
{
	if( Player.x == hx && Player.y == hy ) return (1);
	return (0);
}
// プレイヤーと階段の当たり判定
function HitCheckStep()
{
	if( gamed.stage == MAX_STAGE-1 ){
		if( stepx == -1 ) return (0);
		else {
			if( HitCheck( stepx, stepy ) == 1 ) return (1);
		}
	}
	else{
		if( HitCheck( stepx, stepy ) == 1 ) return (1);
	}
	return (0);
}
// プレイヤーと壁の当たり判定
function HitCheckWall()
{
	var i = 0;
	for( i = 0; i < WallMax; i++ ){
		if( HitCheck( wall_x[i], wall_y[i] ) == 1 ){
			//window.alert("Hit"+Player.x+" : "+wall_x[i]);
			return (1);
		}
	}
	return (0);
}
// プレイヤーと宝箱の当たり判定
function HitCheckBox()
{
	var i = 0;
	for( i = 0; i < BOX_MAX; i++ ){
		if( HitCheck( boxd[i].x, boxd[i].y ) == 1 ){
			if( boxd[i].activ == 0 ) continue;
			if( boxd[i].on == 0 ){
				boxd[i].on = 1;
				document.all("box"+i).src = box_o_img.src;

				// 換金アイテムの処理 17
				if( gamed.stage==17 ){
					PlayerDamage(Math.floor(Player.hp/2));
				}

				if( boxd[i].type >= 0 || boxd[i].type < MAX_STAGE ){
					gamed.pitem[gamed.stage] = 1;
					MessageWindowDraw(2,boxd[i].type);
					PItemDrawCheck();
				}
			}
			return (1);
		}
	}
	return (0);
}
// 敵と宝箱の当たり判定
function HitCheckBoxEnemy(x,y)
{
	var i = 0;
	for( i = 0; i < BOX_MAX; i++ ){
		if( boxd[i].activ == 0 ) continue;
		if( boxd[i].x == x && boxd[i].y == y ) return (1);
	}
	return (0);
}
// 敵と壁の当たり判定
function HitCheckWallEnemy(ei)
{
	var i = 0;
	for( i = 0; i < WallMax; i++ ){
		if( Enemy[ei].x == wall_x[i] && Enemy[ei].y == wall_y[i] ){
			return (1);
		}
	}
	return (0);
}
// UNITとマップ端の当たり判定
function HitCheckMapEdge(u_x,u_y)
{
	if( u_x < 0 || u_x > 14 || u_y < 0 || u_y > 14 ){
		return (1);
	}
	else return(0);
}
// プレイヤーとアイテムの当たり判定
function HitCheckItem()
{
	var i = 0;

	for( i = 0; i < ITEM_MAX; i++ ){
		if( itemd[i].activ == 0 ) continue;

		if( HitCheck( itemd[i].x, itemd[i].y ) == 1 ){

			if( itemd[i].type == 0 ){	// 松明
				gamed.lightcnt = LIGHT_CNT;
				if( Player.light < 3 ){
					Player.light++;
					document.all("darkmask0").src = darkmask_img[Player.light-1].src;
					MapDarkCheckInit(Player.light);
					MapDarkMarginCtrl();
				}
			}
			else if( itemd[i].type == 1 ){	// 金貨
				Player.gold += COIN_POINTS;
				if( Player.gold > 9999) Player.gold = 9999;
				PlayerParaDraw("gd", Player.gold, 4);
			}
			else if( itemd[i].type == 2 ){	// 金塊
				Player.gold += INGOT_POINTS;
				if( Player.gold > 9999) Player.gold = 9999;
				PlayerParaDraw("gd", Player.gold, 4);
			}
			else if( itemd[i].type == 3 ){	// 武器 0
				if( Player.weapon < 1 ){
					Player.weapon = 1;
					MessageWindowDraw(0,0);
					PlayerWeaponNameDraw();
					gamed.e_item_get = 1;
				}
			}
			else if( itemd[i].type == 4 ){	// 武器 1
				if( Player.weapon < 2 ){
					Player.weapon = 2;
					MessageWindowDraw(0,1);
					PlayerWeaponNameDraw();
					gamed.e_item_get = 1;
				};
			}
			else if( itemd[i].type == 5 ){	// 武器 2
				if( Player.weapon < 3 ){
					Player.weapon = 3;
					MessageWindowDraw(0,2);
					PlayerWeaponNameDraw();
					gamed.e_item_get = 1;
				}
			}
			else if( itemd[i].type == 6 ){	// 武器 3
				if( Player.weapon < 4 ){
					Player.weapon = 4;
					MessageWindowDraw(0,3);
					PlayerWeaponNameDraw();
					gamed.e_item_get = 1;
				}
			}
			else if( itemd[i].type == 7 ){	// 鎧 0
				if( Player.armor < 1 ){
					Player.armor = 1;
					MessageWindowDraw(1,0);
					PlayerArmorNameDraw();
					gamed.e_item_get = 1;
				}
			}
			else if( itemd[i].type == 8 ){	// 鎧 1
				if( Player.armor < 2 ){
					Player.armor = 2;
					MessageWindowDraw(1,1);
					PlayerArmorNameDraw();
					gamed.e_item_get = 1;
				}
			}
			else if( itemd[i].type == 9 ){	// 鎧 2
				if( Player.armor < 3 ){
					Player.armor = 3;
					MessageWindowDraw(1,2);
					PlayerArmorNameDraw();
					gamed.e_item_get = 1;
				}
			}
			else if( itemd[i].type == 10 ){	// 鎧 3
				if( Player.armor < 4 ){
					Player.armor = 4;
					MessageWindowDraw(1,3);
					PlayerArmorNameDraw();
					gamed.e_item_get = 1;
				}
			}
			else if( itemd[i].type == 11 ){	// ポーション B
				Player.hp += B_POTION_POINTS;
				if( Player.hp > Player.maxhp ) Player.hp = Player.maxhp;
				PlayerHpDraw();
				PlayerHpBarDraw();
			}
			else if( itemd[i].type == 12 ){	// ポーション K
				Player.hp += K_POTION_POINTS;
				if( Player.hp > Player.maxhp ) Player.hp = Player.maxhp;
				PlayerHpDraw();
				PlayerHpBarDraw();
			}
			else if( itemd[i].type == 13 ){	// お姫さま
//				stepx = 8;
//				stepy = 8;
//				StepDraw();
				// エンディングへ
				gamed.gameclear = 1;
			}

			itemd[i].activ = 0;
			//document.all("item"+i).style.display = "none";
			document.all("item"+i).src = cl_img.src;
		}
	}

	return(0);
}
// プレイヤーと敵の当たり判定
function HitCheckEnemy()
{
	var i = 0;
	var dmg = 0;
	var edmg = 0;
	var ret = 0;
	var hitc = 0;

	for( i = 0; i < ENEMY_MAX; i++ ){
		if( Enemy[i].activ == 0 || Enemy[i].re_wait > 0 ) continue;

		if( Enemy[i].type == 17 ){
			if( HitCheck( Enemy[i].x, Enemy[i].y ) == 1 || HitCheck( Enemy[i].x+1, Enemy[i].y ) == 1 ||
			   HitCheck( Enemy[i].x, Enemy[i].y+1 ) == 1 || HitCheck( Enemy[i].x+1, Enemy[i].y+1 ) == 1 ){
				hitc = 1;
			}
			else hitc = 0;
		}
		else{
			if( HitCheck( Enemy[i].x, Enemy[i].y ) == 1 ) hitc = 1;
			else hitc = 0;
		}
		
		if( hitc == 1 ){
			ret = 1;

			// 特定ステージでは、接触した時点で換金アイテム入手失敗
			gamed.no_encount = 0;
			// 換金アイテムの処理 0 / 7 / 12
			if(gamed.stage == 0 || gamed.stage == 7 || gamed.stage == 12) gamed.r_item_get = 1;

			if(Enemy[i].type != 18){
				Enemy[i].encount = 1;
				Enemy[i].encount_stop = 4;
				Enemy[i].movecnt = 0;
				Enemy[i].attack = 1;
				Enemy[i].attack_wait = 2;
				SrashStart(i);
			}

			dmg = Enemy[i].atk - (Player.def + arm_def[Player.armor]);
			if( dmg < 1 ) dmg = 1;
			if( Enemy[i].type == 2 || Enemy[i].type == 3 ) dmg = 0;

			edmg = (Player.atk + wep_atk[Player.weapon]) - Enemy[i].def;
			if( edmg < 1 ) edmg = 1;

			if( Player.dir == 0 ){
				if( Enemy[i].dir == 0 ) gamed.hit_dir = 1; // 後ろから
				else if( Enemy[i].dir == 1 ) gamed.hit_dir = 0;	// 正面から
				else gamed.hit_dir = 2; // 側面から
			}
			else if( Player.dir == 1 ){
				if( Enemy[i].dir == 0 ) gamed.hit_dir = 0; // 正面から
				else if( Enemy[i].dir == 1 ) gamed.hit_dir = 1; // 後ろから
				else gamed.hit_dir = 2; // 側面から
			}
			else if( Player.dir == 2 ){
				if( Enemy[i].dir == 3 ) gamed.hit_dir = 0; // 正面から
				else if( Enemy[i].dir == 2 ) gamed.hit_dir = 1; // 後ろから
				else gamed.hit_dir = 2; // 側面から
			}
			else if( Player.dir == 3 ){
				if( Enemy[i].dir == 2 ) gamed.hit_dir = 0; // 正面から
				else if( Enemy[i].dir == 3 ) gamed.hit_dir = 1; // 後ろから
				else gamed.hit_dir = 2; // 側面から
			}

			// 正面 ------------------------------------------
			if( gamed.hit_dir == 0 ){
				PlayerDamage(dmg);
				if(Enemy[i].type != 18){
					EnemyDamage(i,edmg);
					// 換金アイテムの処理 3
					if( gamed.stage == 3 ){
						gamed.r_item_tmp++;
						if(gamed.r_item_tmp == 2) gamed.r_item_set = 1;
					}
				}
			}
			// 背後 ------------------------------------------
			else if( gamed.hit_dir == 1 ){
				if(Enemy[i].type != 18){
					EnemyDamage(i,edmg*2);
					// 換金アイテムの処理 2
					if( gamed.stage == 2 ){
						gamed.r_item_tmp++;
						if(gamed.r_item_tmp == 1) gamed.r_item_set = 1;
					}
				}
			}
			// 側面 ------------------------------------------
			else if( gamed.hit_dir == 2 ){
				PlayerDamage(Math.floor(dmg/2));
				if(Enemy[i].type != 18){
					EnemyDamage(i,edmg);
					// 換金アイテムの処理 9
					if( gamed.stage == 9 ){
						gamed.r_item_tmp++;
						if( gamed.r_item_tmp == 5 ) gamed.r_item_set = 1;
					}
				}
			}
			
			//EnemyDeadCheck(i);
		}
	}
	return (ret);
}

function SrashStart(num)
{
	document.all("srash0").style.display = "block";
	PosSetScreen("srash0", Enemy[num].x, Enemy[num].y);
	srashcnt = 1;
}
function SrashCtrl()
{
	if( Player.attack_wait > 0 || Player.movecnt > 0 ) return(0);

	if( srashcnt > 0 ){
		srashcnt--;
		if( srashcnt <= 0 ){
			document.all("srash0").style.display = "none";
		}
	}
}

//
// 階段の描画
//
function StepDraw()
{
	PosSetScreen("step0", stepx, stepy );
}

//
// 敵のコントロール
//
function EnemyAttackPatCtrl()
{
	var i = 0;

	for( i = 0; i < ENEMY_MAX; i++ ){
		EnemyDamageDrawCtrl(i);

		if( Enemy[i].activ == 0 || Enemy[i].re_wait > 0) continue;

		// Slime 1, 2
		if( Enemy[i].type == 2 || Enemy[i].type == 3 ){
		}
		// それ以外
		else {
			if( Enemy[i].attack > 0 ){
				Enemy[i].attack_wait--;
				document.all("enemy"+i).src = enemy_img[Enemy[i].img_number][4+(Enemy[i].dir*2)+(1-Enemy[i].attack_wait)].src;
				if( Enemy[i].attack_wait <= 0 ){
					Enemy[i].attack = 0;
					Enemy[i].attack_wait = 0;
				}
			}
		}

		PosSetScreen("enemy"+i,Enemy[i].x,Enemy[i].y);
	}
}
function EnemyDamage(no, dmg)
{
	Enemy[no].hp-=dmg;
	EnemyDamageDrawStart(no,dmg);
}
/*
function EnemyDeadCheck(no)
{
	if( Enemy[no].hp <= 0 ){
		Enemy[no].dead = 1;
	}
}
*/

function EnemyDel(no)
{
	//window.alert("enemy del "+Enemy[no].type);
	Enemy[no].activ = 0;
	Enemy[no].hp = 0;
	if(Enemy[no].type != 18){
		gamed.enemy_dead++;
		
		// 換金アイテムの処理 1
		// 換金アイテムの処理 4
		// 換金アイテムの処理 8
		// 換金アイテムの処理 13
		// 換金アイテムの処理 18
		if( gamed.stage == 1  && Enemy[no].type == 12 ) gamed.r_item_set = 1;
		if( gamed.stage == 4  && Enemy[no].type == 13 ) gamed.r_item_set = 1;
		if( gamed.stage == 8  && Enemy[no].type == 14 ) gamed.r_item_set = 1;
		if( gamed.stage == 13 && Enemy[no].type == 15 ) gamed.r_item_set = 1;
		if( gamed.stage == 18 && Enemy[no].type == 16 ) gamed.r_item_set = 1;

		// 換金アイテムの処理 10
		if( gamed.stage == 10 ){
			if( Enemy[no].type == 1 ){
				gamed.r_item_tmp++;
				if( gamed.r_item_tmp == 5 ){
					gamed.r_item_set = 1;
				}
			}
		}
		// 換金アイテムの処理 11
		if( gamed.stage == 11 ){
			if( Player.dir == 0 ) gamed.r_item_set = 1;
		}
	}
	//document.all("enemy"+no).src = cl_img.src;
	document.all("enemy"+no).style.display = "none";

	// アイテムの出現
	if(Math.abs(Math.floor(Math.random()*3))==0){
		if(itemd[1].activ==0){
			if(Math.abs(Math.floor(Math.random()*15))<=1) ItemDataSet(1,2,Enemy[no].x,Enemy[no].y);	// 金塊
			else if(Math.abs(Math.floor(Math.random()*15))<=5) ItemDataSet(1,1,Enemy[no].x,Enemy[no].y);	// 金貨
			else if(Math.abs(Math.floor(Math.random()*15))<=10) ItemDataSet(1,11,Enemy[no].x,Enemy[no].y);	// ポーション・青
			else ItemDataSet(1,12,Enemy[no].x,Enemy[no].y);	// ポーション・黒
		}
	}

	// 倒したのがドラゴンだった場合
	if( Enemy[no].type == 17 ){
		ItemDataSet(3,13,Enemy[no].x,Enemy[no].y);
		// 換金アイテムの処理 19
		gamed.r_item_set = 1;
	}
	// 消えたのが竜の火だった場合
	else if( Enemy[no].type == 18 ){
		Enemy[no].step = 0;
	}

	Player.exp += Enemy[no].exp;
	PlayerParaDraw("ex", Player.exp, 4);
	Player.gold += Enemy[no].gold;
	PlayerParaDraw("gd", Player.gold, 4);

	if( Player.exp >= MAX_EXP ) Player.exp = MAX_EXP;
	if( Player.gold >= MAX_GOLD ) Player.gold = MAX_GOLD;

	PlayerLvUpCheck();

	// BOSS 出現のチェック
	if( (gamed.boss_get == 0) && (boss_get_cnt != 0) && (boss_get_cnt <= gamed.enemy_dead ) ){
		if(gamed.stage == 1){
			EnemyDataSetBossA( no, 8, 8, 1, 3 );
			Enemy[no].re_wait = 1;
			gamed.boss_get = 1;
		}
		else if( gamed.stage == 4 ){
			EnemyDataSetBossB( no, 8, 8, 1, 3 );
			Enemy[no].re_wait = 1;
			gamed.boss_get = 1;
		}
		else if( gamed.stage == 8 ){
			EnemyDataSetBossC( no, 8, 8, 1, 3 );
			Enemy[no].re_wait = 1;
			gamed.boss_get = 1;
		}
		else if( gamed.stage == 13 ){
			EnemyDataSetBossD( no, 8, 8, 1, 3 );
			Enemy[no].re_wait = 1;
			gamed.boss_get = 1;
		}
		else if( gamed.stage == 18 ){
			EnemyDataSetBossE( no, 8, 8, 1, 3 );
			Enemy[no].re_wait = 1;
			gamed.boss_get = 1;
		}
		else if( gamed.stage == 19 ){
			EnemyDataSetDragon( no, 8, 8, 1, 3 );
			Enemy[no].re_wait = 1;
			gamed.boss_get = 1;
		}
	}
	else{
		EnemySet(no);
	}
}
function EnemySet(ei)
{
	if( enemy_stage_cnt > enemy_stage_max[gamed.stage] ) return (0);

	if(Enemy[ei].type != 18) enemy_stage_cnt++;

	EnemyDataSetD(ei);
	Enemy[ei].re_wait = 1;
}
function EnemyDataSetD(ei)
{
	if( gamed.stage == 19 ){
		EnemyDataSetFire(ei,18,18,0,4,0);
	}
	else{
		EnemeStageDataSet(ei);
		enemy_stage_cnt++;
	}
}

// 敵被ダメ表示
function EnemyDamageDrawStart( i,dmg )
{
	var hp = 0;

	if(dmg < 100) document.all("edmgnum0").src = cl_img.src;
	else{
		hp = Math.floor((dmg/100)%10);
		document.all("edmgnum0").src = dmgnum_img[hp].src;
	}

	if(dmg < 10) document.all("edmgnum1").src = cl_img.src;
	else{
		hp = Math.floor((dmg/10)%10);
		document.all("edmgnum1").src = dmgnum_img[hp].src;
	}

	hp = dmg%10;
	document.all("edmgnum2").src = dmgnum_img[hp].src;

	GDSetEnemyDamage(i);
	Enemy[i].dmgdraw_wait = 4;
}
function EnemyDamageDrawCtrl(i)
{
	if( Enemy[i].dmgdraw_wait > 0 ){
		Enemy[i].dmgdraw_wait--;
		GDSetEnemyDamage(i);
		if( Enemy[i].dmgdraw_wait <= 0 ){
			if( Enemy[i].hp <= 0 ) EnemyBreakStart(i,Enemy[i].x,Enemy[i].y);// EnemyDel(i);
			document.all("edmgnum0").src = cl_img.src;
			document.all("edmgnum1").src = cl_img.src;
			document.all("edmgnum2").src = cl_img.src;
		}
	}
}

// 敵やられエフェクト
function EnemyBreakStart(i,x,y)
{
	delenemynumber = i;
	PosSetScreen("break0", x,y);
	ebreakcnt = EBREAKCNT_MAX;
	ebreakwait = 0;
}
function EnemyBreakCtrl()
{
	if( Player.attack_wait > 0 || Player.movecnt > 0 ) return(0);
	
	if( ebreakcnt == -1 ) return (0);
	if( ebreakcnt <= 0 ){
		ebreakcnt = -1;
		document.all("break0").src = cl_img.src;
		EnemyDel(delenemynumber);
		return (0);
	}

	ebreakwait--;
	if( ebreakwait < 0 ){
		document.all("break0").src = break_img[4-ebreakcnt].src;
		ebreakcnt--;
		ebreakwait = EBREAKWAIT_MAX;
	}
}

//
// 敵の移動
//
//	i  ...敵の通し番号
//	dir...移動する方向
//
function EnemyMove()
{
	var i = 0;
	var dmg = 0;
	for(i = 0; i < ENEMY_MAX; i++){

		if( Enemy[i].activ == 0 || Enemy[i].dead == 1 || Enemy[i].re_wait > 0 ) continue;
		if( Enemy[i].type == 18 && Enemy[i].step == 0 ) continue;


		// 敵の動き
		if( Enemy[i].type == 1 || Enemy[i].type == 2 || Enemy[i].type == 3 ){
			EnemyMoveType00(i);
		}
		else if( Enemy[i].type == 0 || Enemy[i].type == 4 || Enemy[i].type == 5 ){
			EnemyMoveType01(i);
		}
		else if( Enemy[i].type == 7 ){
			EnemyMoveType02(i);
		}
		else if( Enemy[i].type == 8 || Enemy[i].type == 9){
			EnemyMoveType04(i);
		}
		else if( Enemy[i].type == 17 ){
			EnemyMoveTypeDragon(i);
		}
		else if( Enemy[i].type == 18 ){
			EnemyMoveTypeFire(i);
		}
		else{
			EnemyMoveType03(i);
		}


		document.all("enemy"+i).src = enemy_img[Enemy[i].img_number][Enemy[i].dir].src;

		Enemy[i].movecnt = 0;
		Enemy[i].old_x = Enemy[i].x;
		Enemy[i].old_y = Enemy[i].y;

		if( Enemy[i].dir == 0 ){	// UP
			Enemy[i].y -= 1;
		}
		else if( Enemy[i].dir == 1 ){	// DOWN
			Enemy[i].y += 1;
		}
		else if( Enemy[i].dir == 2 ){	// LEFT
			Enemy[i].x -= 1;
		}
		else if( Enemy[i].dir == 3 ){	// RIGHT
			Enemy[i].x += 1;
		}

		if( Enemy[i].type == 17 ){ // 竜
			// マップ端との当たり判定
			if( HitCheckMapEdge(Enemy[i].x,Enemy[i].y) == 1 || HitCheckMapEdge(Enemy[i].x+1,Enemy[i].y) == 1 
			   || HitCheckMapEdge(Enemy[i].x,Enemy[i].y+1) == 1 || HitCheckMapEdge(Enemy[i].x+1,Enemy[i].y+1) == 1){
				Enemy[i].x = Enemy[i].old_x;
				Enemy[i].y = Enemy[i].old_y;
				Enemy[i].movecnt = 0;
				Enemy[i].encount = 0;
				Enemy[i].encount_wall = 1;
			}
			// プレイヤーとの当たり判定
			else if(HitCheckPlayer(Enemy[i].x, Enemy[i].y,i) == 1 || HitCheckPlayer(Enemy[i].x+1, Enemy[i].y,i) == 1 ||
				   HitCheckPlayer(Enemy[i].x, Enemy[i].y+1,i) == 1 || HitCheckPlayer(Enemy[i].x+1, Enemy[i].y+1,i) == 1 ){
				Enemy[i].x = Enemy[i].old_x;
				Enemy[i].y = Enemy[i].old_y;
				Enemy[i].movecnt = 0;
				Enemy[i].encount = 1;
				Enemy[i].encount_stop = 4;
				Enemy[i].encount_wall = 0;
				dmg = Enemy[i].atk - (Player.def + arm_def[Player.armor]);
				if( dmg < 1 ) dmg = 1;
				pl_dmg_set = 1;
				pl_dmg_set_dmg = dmg;
				//PlayerDamage(dmg);
			}
			else{
				if(Enemy[i].encount == 1){
					Enemy[i].movecnt = 0;
				}
				else{
					Enemy[i].movecnt = 4;
				}
				Enemy[i].x = Enemy[i].old_x;
				Enemy[i].y = Enemy[i].old_y;
				Enemy[i].encount_wall = 0;
			}
		}
		else{
			// 壁・マップ端との当たり判定
			if(HitCheckWallEnemy(i) == 1 || HitCheckMapEdge(Enemy[i].x,Enemy[i].y) == 1 || HitCheckBoxEnemy(Enemy[i].x,Enemy[i].y) == 1 ){
				if(Enemy[i].type==18){
					//window.alert("map hit");
					EnemyDel(i);
					//Enemy[i].activ = 0;
					//document.all("enemy"+i).src = cl_img.src;
				}
				else{
					Enemy[i].x = Enemy[i].old_x;
					Enemy[i].y = Enemy[i].old_y;
					if( Enemy[i].type != 2 && Enemy[i].type != 3 ){
						Enemy[i].attack = 1;
						Enemy[i].attack_wait = 2;
					}
					Enemy[i].movecnt = 0;
					Enemy[i].encount = 0;
					Enemy[i].encount_wall = 1;
				}
			}
			// プレイヤーとの当たり判定
			else if(HitCheckPlayer(Enemy[i].x, Enemy[i].y,i) == 1){
				if(Enemy[i].type==18){
					//window.alert("map hit");
					EnemyDel(i);
					PlayerDamage(50);
					//Enemy[i].activ = 0;
					//document.all("enemy"+i).src = cl_img.src;
				}
				else{
					Enemy[i].x = Enemy[i].old_x;
					Enemy[i].y = Enemy[i].old_y;
					if( Enemy[i].type != 2 && Enemy[i].type != 3 ){
						Enemy[i].attack = 1;
						Enemy[i].attack_wait = 2;
					}
					Enemy[i].movecnt = 0;
					Enemy[i].encount = 1;
					Enemy[i].encount_stop = 4;
					Enemy[i].encount_wall = 0;
					dmg = Enemy[i].atk - (Player.def + arm_def[Player.armor]);
					if( dmg < 1 ) dmg = 1;

					pl_dmg_set = 1;
					pl_dmg_set_dmg = dmg;
					//PlayerDamage(dmg);
				}
			}
			else{
				if(Enemy[i].encount == 1){
					Enemy[i].movecnt = 0;
				}
				else{
					Enemy[i].movecnt = 4;
				}
				Enemy[i].x = Enemy[i].old_x;
				Enemy[i].y = Enemy[i].old_y;
				Enemy[i].encount_wall = 0;
			}
		}
	}

	return (0);
}
// 敵の動き
//		ランダムで歩く
function EnemyMoveType00(i)
{
	if(Enemy[i].encount == 0){
		Enemy[i].dir = Math.abs(Math.floor(Math.random()*4));
	}
	else{
		Enemy[i].encount_stop--;
		if( Enemy[i].encount_stop < 0 ){
			Enemy[i].encount = 0;
		}
	}
}
// 敵の動き
//		何かにぶつかるまで真っ直ぐ歩く
//		プレイヤーが視界に入ると追いかけてくる
function EnemyMoveType01(i)
{
	if( EnemySightCheck(i,Enemy[i].sight) == 1 ){
		EnemyApproach(i);
		Enemy[i].encount = 0;
	}
	else{
		if( Enemy[i].encount_wall == 1 ){
			Enemy[i].dir = Math.abs(Math.floor(Math.random()*4));
		}

		if( Enemy[i].encount_stop > 0 ){
			Enemy[i].encount_stop--;
			if( Enemy[i].encount_stop <= 0 ){
				Enemy[i].encount = 0;
				Enemy[i].encount_wall = 0;
				Enemy[i].dir = Math.abs(Math.floor(Math.random()*4));
			}
		}
	}
}
// 敵の動き
//		3ターンに一回方向転換する
function EnemyMoveType02(i)
{
	if( Enemy[i].walkcnt >= 3 ){
		Enemy[i].walkcnt = 0;
		Enemy[i].dir = Math.abs(Math.floor(Math.random()*4));
	}
	else{
		Enemy[i].walkcnt++;
	}
}
// 敵の動き
//		5ターンに一回方向転換
//		プレイヤーが視界に入ったら追いかけてくる
function EnemyMoveType03(i)
{
	if( EnemySightCheck(i,Enemy[i].sight) == 1 ){
		EnemyApproach(i);
		Enemy[i].encount = 0;
	}
	else{
		if( Enemy[i].walkcnt >= 5 ){
			Enemy[i].walkcnt = 0;
			Enemy[i].dir = Math.abs(Math.floor(Math.random()*4));
		}
		else{
			Enemy[i].walkcnt++;
		}
	}
}
// 敵の動き
//		ランダムで歩く
//		一定距離内に入ったら追跡
function EnemyMoveType04(i)
{
	if( EnemyRange(i) <= 3 ){
		EnemyApproach(i);
		Enemy[i].encount = 0;
	}
	else{
		if(Enemy[i].encount == 0){
			Enemy[i].dir = Math.abs(Math.floor(Math.random()*4));
		}
		else{
			Enemy[i].encount_stop--;
			if( Enemy[i].encount_stop < 0 ){
				Enemy[i].encount = 0;
			}
		}
	}
}
// プレイヤーとの距離を測る
//
function EnemyRange(i)
{
	var h = Math.abs(Enemy[i].x - Player.x);
	var v = Math.abs(Enemy[i].y - Player.y);
	var r = h+v;

	return(r);
}
// プレイヤーに近づく
//
function EnemyApproach(i)
{
	if( Enemy[i].x > Player.x ) Enemy[i].dir = 2;
	else if( Enemy[i].x < Player.x ) Enemy[i].dir = 3;
	else if( Enemy[i].y > Player.y ) Enemy[i].dir = 0;
	else if( Enemy[i].y < Player.y ) Enemy[i].dir = 1;
}
// 敵の視界チェック
//		w...視界の広さ(片幅)
function EnemySightCheck(i,w)
{
	if( Enemy[i].dir == 0 ){		// UP
		if( Enemy[i].y >= Player.y ){
			if( Enemy[i].x-w <= Player.x && Enemy[i].x+w >= Player.x ) return(1);
		}
	}
	else if( Enemy[i].dir == 1 ){	// DOWN
		if( Enemy[i].y <= Player.y ){
			if( Enemy[i].x-w <= Player.x && Enemy[i].x+w >= Player.x ) return(1);
		}
	}
	else if( Enemy[i].dir == 2 ){	// LEFT
		if( Enemy[i].x >= Player.x ){
			if( Enemy[i].y-w <= Player.y && Enemy[i].y+w >= Player.y ) return(1);
		}
	}
	else if( Enemy[i].dir == 3 ){	// RIGHT
		if( Enemy[i].x <= Player.x ){
			if( Enemy[i].y-w <= Player.y && Enemy[i].y+w >= Player.y ) return(1);
		}
	}
	
	return(0);
}
// 敵の動き
//		竜
function EnemyMoveTypeDragon(i)
{
	var fire_num = 0;

	// 火を吹く
	if( Math.abs(Math.floor(Math.random()*2)) == 0 ){
		fire_num = FireSetCheck();
		if( fire_num != -1 ){
			EnemyDataSetFire(fire_num,Enemy[i].x,Enemy[i].y,Enemy[i].dir,4,1);
			document.all("enemy"+i).src = enemy_img[Enemy[i].img_number][Enemy[i].dir].src;
		}
	}

	// プレイヤーに近づく...かも
	if( EnemySightCheck(i,Enemy[i].sight) == 1 ){
		if(Math.abs(Math.floor(Math.random()*3)) == 0) EnemyApproach(i);
	}
	else{
		if(Enemy[i].encount == 0){
			Enemy[i].dir = Math.abs(Math.floor(Math.random()*4));
		}
		else{
			Enemy[i].encount_stop--;
			if( Enemy[i].encount_stop < 0 ){
				Enemy[i].encount = 0;
			}
		}
	}
}
function FireSetCheck()
{
	var i = 0;
	for( i = 0; i < ENEMY_MAX; i++ ){
		if( Enemy[i].type != 17 ){
			if( Enemy[i].step == 0 ) return (i);
		}
	}
	return (-1);
}
// 敵の動き
//		火
function EnemyMoveTypeFire(i)
{
}

function HitCheckPlayer(ex,ey,ei)
{
	if( ex == playerx_enemy_hitcheck && ey == playery_enemy_hitcheck ){
		return(1);
	}
	else{
		return(0);
	}
}
function EnemyMoveCtrl(ei)
{
	if( Enemy[ei].movecnt > 0 && Enemy[ei].encount == 0 ){
		if( Enemy[ei].dir == 0 ){	// UP
			if( Enemy[ei].y > 0 ) Enemy[ei].y -= 0.25;
		}
		if( Enemy[ei].dir == 1 ){	// DOWN
			if(Enemy[ei].y < 14) Enemy[ei].y += 0.25;
		}
		if( Enemy[ei].dir == 2 ){	// LEFT
			if( Enemy[ei].x > 0 ) Enemy[ei].x -= 0.25;
		}
		if( Enemy[ei].dir == 3 ){	// RIGHT
			if(Enemy[ei].x < 14) Enemy[ei].x += 0.25;
		}
		Enemy[ei].movecnt--;
		
		PosSetScreen("enemy"+ei, Enemy[ei].x, Enemy[ei].y );
	}
}
function EnemyActionCtrl()
{
	var i = 0;

	for( i = 0; i < ENEMY_MAX; i++ ){
		if( Enemy[i].re_wait > 0 ){
			Enemy[i].re_wait--;
			if( Enemy[i].re_wait <= 0 ){
				Enemy[i].re_wait = 0;

				// 出現位置がプレイヤーと重なっていたらずらす
				if( Enemy[i].x == Player.x && Enemy[i].y == Player.y ){
					if( Enemy[i].x < 14 ){
						Enemy[i].x++;
					}
					else if( Enemy[i].x > 1 ){
						Enemy[i].x--;
					}
				}
				document.all("enemy"+i).style.display = "block";
			}
		}
		else{
			if(Enemy[i].activ == 0) continue;
			EnemyMoveCtrl(i);
		}
	}
}

function PItemDrawCheck()
{
	var i = 0;

	for( i = 0; i < MAX_STAGE; i++ ){
		if( gamed.pitem[i] == 0 ){
			document.all("pitem"+i).src = cl_img.src;
			continue;
		}
		document.all("pitem"+i).src = item_list_name_img[i].src;
	}
}

//イベントリスナー
$(document).keydown(function(){
 if(gamed.mode==G_MODE_OP){
  $("#audio_OP").get(0).play();
 }
});

$(document).click(function(){
 if(gamed.mode==G_MODE_OP){
  $("#audio_OP").get(0).play();
 }
});

//●ゲーム開始関数。
function StartDM1(){
 //
 GameInit();

 //
 Main();
}

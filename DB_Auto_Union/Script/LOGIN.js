/**************************************************
 *
 *  功能：主程式，实现测试模块的运行工作																									 																							 
 *  作者：陈文强
 *  时间：2016年8月30日11:16:24
 *  版权：Copyright (c) 2015
 *
 **************************************************/

function Main()
{
 TestedApps.DreamBookAuthor.Run();  //打开DB工具
	 Login_UI_Text();  //登录界面的文字内容
	 Login_UI_Font();  //登录界面的字体类型
	 Login_Key_Tab();  //登录界面的TAB键
	 Login_Key_Enter();//登录界面Enter键提交
 TestedApps.DreamBookAuthor.Close();//关闭DB工具  
}


/**
 *  功能：   登录界面的UI测试
 *  测试要点：文字、TAB键、Enter键等
 *
 ****/
function Login_UI_Text()
{
	var dreamBookAuthor;
	var frame;
	var lineEdit;
	var button;
	var button2;
	var mainWindow;
	var login_ui_text_folder;
	
	//以下的变量命名顺序遵循登录窗口从上到下
	//从左到右的规范
	var txt_labelTitle,		       //Dream Book Author登录
			txt_label_2,             //登录到Dream Book
			txt_labelTip,            //请在下面输入你的账户和密码。
			txt_idLabel,             //账户
			txt_pwLabel,             //密码
			txt_rememberIDCheckBox,  //记住账户
			txt_rememberPWCheckBox,  //记住密码
			txt_loginButton,         //登录
			txt_cancelButton;        //取消
			
	dreamBookAuthor = Aliases.DreamBookAuthor;
	frame = dreamBookAuthor.LoginDlg.frame;
	
	txt_labelTitle = dreamBookAuthor.LoginDlg.QtObject("labelTitle").QtText;
	txt_label_2 = frame.QtObject("label_2").QtText;
	txt_labelTip = frame.labelTip.QtText;	
	txt_idLabel = frame.QtObject("idLabel").QtText;	
	txt_pwLabel = frame.QtObject("pwLabel").QtText;	
	txt_rememberIDCheckBox = frame.rememberIDCheckBox.QtText;
	txt_rememberPWCheckBox = frame.rememberPWCheckBox.QtText;	
	txt_loginButton = frame.loginButton.QtText;	
	txt_cancelButton = frame.cancelButton.QtText;
	
	/**
	 * 判断登录窗口的界面文字内容与预设是否一致  
	 ***/
	login_ui_text_folder = Log.CreateFolder("页面内容日志信息"); 
	Log.PushLogFolder(login_ui_text_folder);
	
	//登录窗口的“标题”文字判断
	if(txt_labelTitle === Project.Variables.db_labelTitle)
	{
	 Log.Message("【标题】文字内容与预设一致。" + "【" + txt_labelTitle + "】");
	}
	else
	{
	 Log.Error("【标题】文字内容或类型不一致！", Aliases.DreamBookAuthor.LoginDlg);
	}
	
	//登录窗口的“标题2”文字判断
	if(txt_label_2 === Project.Variables.db_label_2)
	{
	 Log.Message("【标题2】文字内容与预设一致。" + "【" + txt_label_2 + "】");
	}
	else
	{
	 Log.Error("【标题2】文字内容或类型不一致！", Aliases.DreamBookAuthor.LoginDlg);
	}
	
	//登录窗口的 “提示”文字判断
	if(txt_labelTip === Project.Variables.db_labelTip)
	{
	 Log.Message("【提示】文字内容与预设一致。" + "【" + txt_labelTip + "】");
	}
	else
	{
	 Log.Error("【提示】文字内容或类型不一致！", Aliases.DreamBookAuthor.LoginDlg);
	}

	//登录窗口的“帐户”文字判断
	if(txt_idLabel === Project.Variables.db_idLabel)
	{
	 Log.Message("【帐户】文字内容与预设一致。" + "【" + txt_idLabel + "】");
	}
	else
	{
	 Log.Error("【帐户】文字内容或类型不一致！", Aliases.DreamBookAuthor.LoginDlg);
	}

	//登录窗口的“密码”文字判断
	if(txt_pwLabel === Project.Variables.db_pwLabel)
	{
	 Log.Message("【密码】文字内容与预设一致。" + "【" + txt_pwLabel + "】");
	}
	else
	{
	 Log.Error("【密码】文字内容或类型不一致！", Aliases.DreamBookAuthor.LoginDlg);
	}
	
	//登录窗口的“记住账户”文字判断
	if(txt_rememberIDCheckBox === Project.Variables.db_rememberIDCheckBox)
	{
	 Log.Message("【记住账户】文字内容与预设一致。" + "【" + txt_rememberIDCheckBox + "】");
	}
	else
	{
	 Log.Error("【记住账户】文字内容或类型不一致！", Aliases.DreamBookAuthor.LoginDlg);
	}

	//登录窗口的“记住密码”文字判断
	if(txt_rememberPWCheckBox === Project.Variables.db_rememberPWCheckBox)
	{
	 Log.Message("【记住密码】文字内容与预设一致。" + "【" + txt_rememberPWCheckBox + "】");
	}
	else
	{
	 Log.Error("【记住密码】文字内容或类型不一致！", Aliases.DreamBookAuthor.LoginDlg);
	}

	//登录窗口的“登录”文字判断
	if(txt_loginButton === Project.Variables.db_loginButton)
	{
	 Log.Message("【登录】文字内容与预设一致。" + "【" + txt_loginButton + "】");
	}
	else
	{
	 Log.Error("【登录】文字内容或类型不一致！", Aliases.DreamBookAuthor.LoginDlg);
	}
	
	//登录窗口的“取消”文字判断
	if(txt_cancelButton === Project.Variables.db_cancelButton)
	{
	 Log.Message("【取消】文字内容与预设一致。" + "【" + txt_cancelButton + "】");
	}
	else
	{
	 Log.Error("【取消】文字内容或类型不一致！", Aliases.DreamBookAuthor.LoginDlg);
	}
	
	Log.PopLogFolder();
	
}
	
/**
 *  功能：查看文字的字体型号
 *  测试要点：目前的界面字体型号为 “微软雅黑”
 *
 ****/
function Login_UI_Font()
{
	var dreamBookAuthor;
	var frame;
	var lineEdit;
	var button;
	var button2;
	var mainWindow;
	var fontType;
	var login_ui_font_folder;
	//以下的变量命名顺序遵循登录窗口从上到下
	//从左到右的规范
	var font_labelTitle,
			font_label_2,
			font_labelTip,
			font_idLabel,
			font_pwLabel,
			font_rememberIDCheckBox,
			font_rememberPWCheckBox,
			font_loginButton,
			font_cancelButton;
			
	dreamBookAuthor = Aliases.DreamBookAuthor;
	frame = dreamBookAuthor.LoginDlg.frame;
	
	font_labelTitle = dreamBookAuthor.LoginDlg.QtObject("labelTitle").font.QFont_family();
	font_label_2 = frame.QtObject("label_2").font.QFont_family();
	font_labelTip = frame.labelTip.font.QFont_family();
	font_idLabel = frame.QtObject("idLabel").font.QFont_family();
	font_pwLabel = frame.QtObject("pwLabel").font.QFont_family();
	font_rememberIDCheckBox = frame.rememberIDCheckBox.font.QFont_family();
	font_rememberPWCheckBox = frame.rememberPWCheckBox.font.QFont_family();
	font_loginButton = frame.loginButton.font.QFont_family();
	font_cancelButton = frame.cancelButton.font.QFont_family();
		
	fontType = Project.Variables.db_login_font_type;   //DB的默认字体类型
	login_ui_font_folder = Log.CreateFolder("登录界面字体型号");
	Log.PushLogFolder(login_ui_font_folder);
	
	//比较各个字体类型是否与默认的一致
	if((fontType == font_labelTitle)&&(fontType == font_label_2)&&(fontType == font_labelTip)&&(fontType == font_idLabel)&&(fontType == font_pwLabel)&&(fontType == font_rememberIDCheckBox)&&(fontType == font_rememberPWCheckBox)&&(fontType == font_loginButton)&&(fontType == font_cancelButton))
	{
	 Log.Message("界面使用的字体型号是 " + Project.Variables.db_login_font_type);
	}
	else
	{
	 Log.Error("界面使用的字体与设计字体不一致，请查看！" + "1." + font_labelTitle + "2." + font_label_2 + "3." + font_labelTip + "4." + font_idLabel + "5." + font_pwLabel + "6." + font_rememberIDCheckBox + "7." + font_rememberPWCheckBox + "8." + font_loginButton+ "9." + font_cancelButton);
	}
	Log.PopLogFolder();	 
}

/**
 *  功能：   查看TAB键的功能
 *  测试要点：判断TAB键是否可用且有一定的顺序性(从上到下，从左到右)
 *
 ****/
function Login_Key_Tab()
{
	var dreamBookAuthor;
	var loginDlg;
	var frame;
	var lineEdit;
	var lineEdit2;
	var checkBox;
	var checkBox2;
	var button;
	var messageBoxDlg;
	var pushButton;
	var flag;
	var checkedIDBefore;
	var checkedIDAfter;
	var checkedPWBefore;
	var checkedPWAfter;
	var loginFocus;
	var cancelFocus;
	var closeFocus;
	var login_key_tab_folder;	
	
	dreamBookAuthor = Aliases.DreamBookAuthor;
	loginDlg = dreamBookAuthor.LoginDlg;
	frame = loginDlg.frame;
	lineEdit = frame.idLineEdit;
	lineEdit.Click();
	lineEdit2 = frame.pwLineEdit;
	lineEdit2.Click();
	//lineEdit.Click(84, 7);
	lineEdit.Keys("[Tab]");
	lineEdit2.Keys("[Tab]");
  	
	checkBox = frame.rememberIDCheckBox;
	checkedIDBefore = frame.rememberIDCheckBox.checked;
	checkBox.Keys(" ");  //此处的空格作用是改变checkbox的当前状态
	checkedIDAfter = frame.rememberIDCheckBox.checked;
	login_key_tab_folder = Log.CreateFolder("TAB键的检查");
	Log.PushLogFolder(login_key_tab_folder);
	if(checkedIDBefore == checkedIDAfter)
	{
	 Log.Error("请检查登录窗口处Tab按键是否有用且遵循从下到下，从左到右的顺序");
	}
	else
	{
	 Log.Message("当前 记住账户 处于激活状态");
	}
	checkBox.Keys("[Tab]");	
	checkedPWBefore = frame.rememberPWCheckBox.checked;
	checkBox2 = frame.rememberPWCheckBox;
	checkBox2.Keys(" ");
	checkedPWAfter = frame.rememberPWCheckBox.checked;

	if(checkedPWBefore == checkedPWAfter)
	{
	 Log.Error("请检查登录窗口处Tab按键是否有用且遵循从下到下，从左到右的顺序");
	}
	else
	{
	 Log.Message("当前 记住密码 处于激活状态");
	}
	
	checkBox2.Keys("[Tab]");
	loginFocus = frame.loginButton.focus;	
	
	if(loginFocus)
	{
	 Log.Message("当前焦点位于 登录 按钮处。");							
	}
	else
	{
	 Log.Error("请检查登录窗口处Tab按键是否有用且遵循从下到下，从左到右的顺序");
	}
	
	button = frame.loginButton;
	button.Keys("[Tab]");	
	cancelFocus = frame.cancelButton.focus;
	if(cancelFocus)
	{
	 Log.Message("当前焦点位于 取消 按钮处。");							
	}
	else
	{
	 Log.Error("请检查登录窗口处Tab按键是否有用且遵循从下到下，从左到右的顺序");
	}
	
	frame.cancelButton.Keys("[Tab]");
	closeFocus = loginDlg.closeButton.focus;  //关闭按钮的当前激活状态
	if(closeFocus)
	{
	 Log.Message("当前焦点位于 X 按钮处。");							
	}
	else
	{
	 Log.Error("请检查登录窗口处Tab按键是否有用且遵循从下到下，从左到右的顺序");
	}
	
	//通过统计测试中出现的错误数量，判断测试的通过与否
	if(Log.ErrCount > 0)
	{
	  Log.Error("总共 " + Log.ErrCount + " 错误出现在TAB键测试中。")
	}
	else
	{
	  Log.Message("测试中没有发现关于TAB键应用方面的问题。");
	}	
	Log.PopLogFolder();
	
}

/**
 *  功能：   判断Enter键是否具有提交功能
 *  测试要点：当光标定位到登录窗口时，按Enter键具有登录动作
 *
 ****/
function Login_Key_Enter()
{
	var dreamBookAuthor;
	var frame;
	var lineEdit;
	var flag;
	var messageEnter;
	var login_key_enter_folder;
	var succLogin;
			succLogin = "登录成功";
	
	dreamBookAuthor = Aliases.DreamBookAuthor;
	frame = dreamBookAuthor.LoginDlg.frame;
	lineEdit = frame.idLineEdit;
	lineEdit.Click();
	lineEdit.Keys("^a[Del]");
	lineEdit.Keys("![ReleaseLast]chenwq");	
	
	lineEdit = frame.pwLineEdit;
	lineEdit.Click();
	lineEdit.Keys("^a[Del]");
	lineEdit.Keys("^a[Del]12345678");
	lineEdit.Keys("[Enter]");
	Delay(3000);  //等待登录的通讯时间
	
	flag = dreamBookAuthor.msgBoxDlg.frame.labelMsg.qt_scrollarea_viewport.Exists;
	messageEnter = Aliases.DreamBookAuthor.msgBoxDlg.frame.labelMsg.wText;
	login_key_enter_folder = Log.CreateFolder("Enter键登录提交");
	Log.PushLogFolder(login_key_enter_folder);
	//判断【Enter】是否可以进行登录提交
	if(flag)
	{	
	 Log.Message("【Enter】可以进行登录提交");
	}
	//判断登录是否成功	
	if(messageEnter === succLogin)
	{
	 Log.Message(Aliases.DreamBookAuthor.msgBoxDlg.frame.labelMsg.wText);
	}
	else
	{
	 Log.Message(Aliases.DreamBookAuthor.msgBoxDlg.frame.labelMsg.wText);
	 Log.Error("【Enter】没有登录成功", Aliases.DreamBookAuthor.msgBoxDlg.frame.labelMsg);
	}
	Log.PopLogFolder();
}




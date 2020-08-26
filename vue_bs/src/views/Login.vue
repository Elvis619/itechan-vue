<template>
    <div class="login_container">
        <div class="login_box">
            <div class="avatar-box">
                <img src="../assets/logo.png">
            </div>
            <!--        登录表单区-->
            <el-form ref="loginFormRef" :rules="rules" :model="loginForm" rlabel-width="0px" class="login_form">
                <el-form-item prop="username">
                    <el-input v-model= "loginForm.username" prefix-icon="el-icon-user"></el-input>
                </el-form-item>
                <el-form-item prop="password">
                    <el-input v-model= "loginForm.password" prefix-icon="el-icon-lock" type="password"></el-input>
                </el-form-item>
                <el-form-item class="btn">
                    <el-button type="primary" @click="login">登录</el-button>
                    <el-button type="info" @click="resetLoginForm">重置</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                loginForm: {
                    username: '',
                    password: ''
                },
                rules: {
                    username: [
                        { required: true, message: '请输入账号', trigger: 'blur' },
                        { min: 4, max: 10, message: '长度在 4 到 10 个字符', trigger: 'blur' }
                    ],
                    password: [
                        { required: true, message: '请输入密码', trigger: 'blur' },
                        { min: 4, max: 20, message: '至少为4位字符', trigger: 'blur' }
                    ]
                }
            }
        },
        methods: {
            resetLoginForm() {
                this.$refs.loginFormRef.resetFields()
            },
            login() {
                let _this = this;
                this.$refs.loginFormRef.validate((valid) => {
                    console.log(valid)
                    if(valid){
                        axios.post('http://localhost:8888/sys/login',this.loginForm).then(function (resp) {
                            console.log(resp)
                            if(resp.data == true){
                                _this.$router.push('/userList')
                            }else {
                                alert("用户名或密码错误")
                                _this.$router.push('/login')
                            }

                        })
                    }else {

                    }
                });
            }
        }
    }
</script>

<style lang="less" scoped>
    .login_container{
        background-color: #2b4b6b;
        height: 100%;
    }
    .login_box{
        width: 450px;
        height: 300px;
        background-color: #fff;
        border-radius: 3px;
        position:absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%);
    }
    .avatar-box{
        height: 130px;
        width: 130px;
        padding: 10px;
        box-shadow: 0 0 10px #ddd;
        background-color: #fff;
        img{
            width: 100%;
            height: 100%;
            border-radius: 50%;
            background-color: #eee;
        }
        border: 1px solid #eee;
        border-radius: 50%;
        position: absolute;
        left: 50%;
        transform: translate(-50%,-50%);
    }
    .btn{
        display: flex;
        justify-content: flex-end;
    }
    .login_form{
        position: absolute;
        bottom: 0;
        width: 100%;
        padding: 0 20px;
        box-sizing: border-box;
    }
</style>

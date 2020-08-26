<template>
    <div>
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>用户管理</el-breadcrumb-item>
            <el-breadcrumb-item>添加用户</el-breadcrumb-item>
        </el-breadcrumb>
        <el-card>
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                <el-form-item label="用户名" prop="username">
                    <el-input v-model="ruleForm.username"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="password">
                    <el-input v-model="ruleForm.password"></el-input>
                </el-form-item>
                <el-form-item label="电话" prop="tel">
                    <el-input v-model="ruleForm.tel"></el-input>
                </el-form-item>
                <el-form-item label="地址" prop="address">
                    <el-input v-model="ruleForm.address"></el-input>
                </el-form-item>


                <el-form-item class="btn">
                    <el-button type="primary" @click="submitForm('ruleForm')">添加</el-button>
                    <el-button @click="resetForm('ruleForm')">重置</el-button>
                </el-form-item>
            </el-form>
        </el-card>
    </div>

</template>

<script>
    export default {
        data() {
            return {
                ruleForm: {
                    username: '',
                    password: '',
                    tel: '',
                    address: ''
                },
                rules: {
                    username: [
                        { required: true, message: '用户名不能为空', trigger: 'blur' },
                        { min: 2, max:20, message: '至少2位',trigger: 'blur'}

                    ],
                    password: [
                        { required: true, message: '密码不能为空', trigger: 'blur' },
                        { min: 6, max: 20, message: '至少为6位字符', trigger: 'blur'}

                    ],
                    tel: [
                        { required: true, message: '电话号码不能为空', trigger: 'blur' },
                        { min: 6, max: 11, message: '电话号码至少为6位，最多11位', trigger: 'blur'}

                    ],
                    address: [
                        { required:true, message: '地址不能为空' ,trigger: 'blur'}

                    ]
                }
            };
        },
        methods: {
            submitForm(formName) {
                let _this = this;
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        axios.post('http://localhost:8888/user/save',this.ruleForm).then(function (resp) {
                            console.log(resp)
                            alert("添加成功")
                            _this.$router.push('/userList')
                        })
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            },

        }
    }

</script>

<style scoped>

</style>
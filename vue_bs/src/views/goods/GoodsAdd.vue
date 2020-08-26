<template>
    <div>
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>商品管理</el-breadcrumb-item>
            <el-breadcrumb-item>添加商品</el-breadcrumb-item>
        </el-breadcrumb>
        <el-card>
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                <el-form-item label="商品名称" prop="gname">
                    <el-input v-model="ruleForm.gname"></el-input>
                </el-form-item>
                <el-form-item label="价格" prop="gprice">
                    <el-input v-model="ruleForm.gprice"></el-input>
                </el-form-item>
                <el-form-item label="总数量" prop="gtotal">
                    <el-input v-model="ruleForm.gtotal"></el-input>
                </el-form-item>
                <el-form-item label="商品类型" prop="type">
                    <el-select v-model="ruleForm.ctype" placeholder="请选择商品类型">
                        <el-option label="小吃糕点" value="1"></el-option>
                        <el-option label="烟酒饮料" value="2"></el-option>
                        <el-option label="五谷杂粮" value="3"></el-option>
                        <el-option label="药材植物" value="4"></el-option>
                    </el-select>
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
                    gname: '',
                    gprice: '',
                    gtotal: '',
                    type: ''
                },
                rules: {
                    gname: [
                        { required: true, message: '商品名称不能为空', trigger: 'blur' },

                    ],
                    gprice: [
                        { required: true, message: '价格不能为空', trigger: 'blur' },

                    ],
                    gtotal: [
                        { required: true, message: '总数量不能为空', trigger: 'blur' },

                    ],
                    gsold: [
                        { required:true,trigger: 'blur'}
                    ],
                    type: [
                        { required:true,trigger: 'blur'}
                    ]
                }
            };
        },
        methods: {
            submitForm(formName) {
                let _this = this;
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        axios.post('http://localhost:8888/goods/save',this.ruleForm).then(function (resp) {
                            console.log(resp)
                            alert("添加成功")
                            _this.$router.push('/goodsList')
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
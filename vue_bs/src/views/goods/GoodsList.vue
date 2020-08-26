<template>
    <div>
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>商品管理</el-breadcrumb-item>
            <el-breadcrumb-item>商品列表</el-breadcrumb-item>
        </el-breadcrumb>


        <el-card>
            <el-row :gutter="20">
                <el-col :span="8">
                    <!--           搜索与添加-->
                    <el-input placeholder="请输入内容" >
                        <el-button slot="append" icon="el-icon-search"></el-button>
                    </el-input>
                </el-col>
                <el-col :span="4">
                    <el-button type="primary" @click="goodsAdd">添加商品</el-button>
                </el-col>
            </el-row>

            <el-table :data="tableData" border stripe>
                <el-table-column
                        type="index"
                        width="50"
                        :index="index"
                        label="序号"
                >

                </el-table-column>
                <!--                <el-table-column-->
                <!--                        prop="id"-->
                <!--                        label="id"-->
                <!--                        >-->
                <!--                </el-table-column>-->
                <el-table-column
                        prop="gname"
                        label="商品名称"
                >
                </el-table-column>

                <el-table-column
                        prop="gprice"
                        label="价格"
                >
                </el-table-column>
                <el-table-column
                        prop="gtotal"
                        label="总数量"
                >
                </el-table-column>
                <el-table-column
                        prop="gsold"
                        label="销售量"
                ></el-table-column>
                <el-table-column
                        prop="ghave"
                        label="库存"
                ></el-table-column>
                <el-table-column
                        prop="money"
                        label="销售额"
                ></el-table-column>
                <el-table-column
                        prop="type"
                        label="类型"
                ></el-table-column>

                <el-table-column
                        fixed="right"
                        label="操作"
                >
                    <template slot-scope="scope">
                        <el-tooltip class="item" effect="dark" content="修改商品" placement="top" enterable="false">
                            <el-button type="primary" icon="el-icon-edit" size="mini" @click="goodsEidt(scope.row)"></el-button>
                        </el-tooltip>
                        <el-tooltip class="item" effect="dark" content="删除商品" placement="top" enterable="false">
                            <el-button type="danger" icon="el-icon-delete" size="mini" @click="goodsDelete(scope.row)"></el-button>
                        </el-tooltip>

                    </template>
                </el-table-column>
            </el-table>
            <el-pagination
                    background
                    layout="prev, pager, next"
                    :total="total+3*(total/7)"
                    @current-change="page">
            </el-pagination>
        </el-card>

    </div>

</template>

<script>
    export default {
        name: "goodsList",
        data(){
            return{
                total: null,
                tableData: null,
                index: null

            }
        },
        created() {
            const  _this = this;
            axios.get('http://localhost:8888/goods/findAll/1/7').then(function (resp) {
                _this.tableData = resp.data;
                _this.total = resp.data[0].total;
                console.log(resp)
            })

        },
        methods:{
            page(currentPage){
                const that = this;
                axios.get('http://localhost:8888/goods/findAll/'+currentPage+'/7').then(function (resp) {
                    that.tableData = resp.data;
                    that.total = resp.data[0].total;
                    that.index = (currentPage - 1)*7+1

                })
            },
            goodsEidt(row){
                this.$router.push({
                    path: '/goodsEdit',
                    query:{
                        id: row.id
                    }
                })
            },
            goodsDelete(row){
                axios.delete('http://localhost:8888/goods/deleteById/'+row.id).then(function (resp) {
                    alert("删除成功");
                    window.location.reload();
                })
            },
            goodsAdd(){
                this.$router.push('/goodsAdd')
            }
        }
    }
</script>

<style lang="less" scoped>
    .el-pagination{
        margin-top: 20px;
    }
</style>
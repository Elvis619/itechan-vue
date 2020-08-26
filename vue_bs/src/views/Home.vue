<template>

    <el-container class="home-container">
        <el-header>
            <div class="header-div">
                <img src="../assets/logo.png">
                <span>i特产后台管理系统</span>

            </div>
<!--            <el-button type="info" @click="logout"> 退出 </el-button>-->
        </el-header>

        <el-container>
            <el-aside :width="isCollapse ? '64px':'200px'">
                <div class="toggle-button" @click="toggleCollapse">
                    |||
                </div>
                <el-menu
                        background-color="#333744"
                        text-color="#fff"
                        active-text-color="#409EFF"
                        unique-opened
                        :collapse="isCollapse"
                        :collapse-transition="false"
                        router
                        :default-active="activePath"
                        >
                    <el-submenu index="1" v-for="(item,index) in $router.options.routes[2].children" :index="index+''" :key="index">
                        <template slot="title">
                            <i :class = item.icon></i>
                            <span v-if="item.index !== '1'">{{item.name}}</span>
                        </template>
                        <el-menu-item index="1-4-1" v-for="(item2,index2) in item.children" :index="item2.path" :key="index2" @click="saveNavState(item2.path)">
                            <template slot="title" >
                                <i class="el-icon-menu"></i>
                                <span>{{item2.name}}</span>
                            </template>
                        </el-menu-item>


                    </el-submenu>

                </el-menu>
            </el-aside>
            <el-main>
                <router-view></router-view>
            </el-main>
        </el-container>

    </el-container>


</template>

<script>
    export default {
        name: "Home",
        created() {
            this.activePath = window.sessionStorage.getItem('activePath')
        },
        data(){
            return{
                isCollapse: false,
                //被激活的链接地址
                activePath: '',
            }
        },
        methods:{
            //点击按钮切换菜单的折叠与展开
            toggleCollapse(){
                this.isCollapse = !this.isCollapse;
            },
            saveNavState(activePath){
                window.sessionStorage.setItem("activePath",activePath)
            }
        }
    }
</script>

<style scoped>
    .home-container{
        height: 100%;
    }
    .el-header{
    background-color: #373d45;
        display: flex;
        justify-content: space-between;
        padding-left: 0;
        align-items: center;
        color: #ffffff;
        font-size: 20px;

}
     .header-div {
        display: flex;
        align-items: center;

    }
     .header-div span{
         margin-left: 100px;
     }
     .header-div img{
         height: 50px;
         width: 60px;
         margin-left: 40px;
     }
    .el-aside{
        background-color: #333744;

    }
    .el-menu{
        border-right: none;
    }
    .el-main{
        background-color: #eaedf1;
    }
    .toggle-button{
        background-color: #4A5064;
        font-size: 10px;
        line-height: 24px;
        color: #ffffff;
        text-align: center;
        letter-spacing: 0.2em;
        cursor: pointer;
    }
</style>
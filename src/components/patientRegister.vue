<template>
    <div class="register">
        <div class="registerForm">
            <el-form
            :model="registerForm"
            status-icon
            :rules="rules"
            ref="registerForm"
            :label-position="labelPosition"
            label-width="120px"
            size="medium"
            >
            <el-form-item label="姓名" prop="userName">
                <el-input v-model.number="registerForm.userName" placeholder="请输入姓名"></el-input>
            </el-form-item>
            <el-form-item label="用户名" prop="accountUser">
                <el-input v-model="registerForm.accountUser" autocomplete="off" placeholder="请输入用户名"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="passwordUser">
                <el-input type="password" v-model="registerForm.passwordUser" autocomplete="off" placeholder="请输入密码"></el-input>
            </el-form-item>
            <el-form-item label="确认密码" prop="checkPass">
                <el-input type="password" v-model="registerForm.checkPass" autocomplete="off" placeholder="请确认密码"></el-input>
            </el-form-item>
            <el-form-item label="地址" prop="address">
                <el-input v-model.number="registerForm.address" placeholder="请输入地址"></el-input>
            </el-form-item>
            <el-form-item label="手机号" prop="user_phone">
                <el-input v-model.number="registerForm.user_phone" placeholder="请输入手机号"></el-input>
            </el-form-item>
            <el-form-item label="年龄" prop="age">
                <el-input v-model.number="registerForm.age" placeholder="请输入年龄"></el-input>
            </el-form-item>
            <el-form-item label="您父亲的名字" prop="qustionForReset">
                <el-input v-model.number="registerForm.qustionForReset" placeholder="此问题用来重置密码"></el-input>
            </el-form-item>
            <div>
                <el-button type="primary" size="small" @click="submitForm('registerForm')">提交</el-button>
                <el-button size="small" @click="resetForm('registerForm')">重置</el-button>
            </div>
            </el-form>
            <div class="foot">
                <span class="footSpan" @click="jump()">返回</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
    return {
        labelPosition: 'left',
        registerForm: {
            userName	: "",
            accountUser		: "",
            passwordUser	: "",
            checkPass:"",
            address	: "",
            user_phone	: "",
            age	:'',
            qustionForReset:''
        },
        rules: {
            userName: [{ required: true, trigger: "blur" }],
            accountUser: [{ required: true, trigger: "blur" }],
            passwordUser: [{ required: true, trigger: "blur" }],
            address:[{ required: true,  trigger: "blur" }],
            user_phone:[{ required: true,  trigger: "blur" }],
            checkPass:[{ required: true,  trigger: "blur" }],
            age:[{ required: true,  trigger: "blur" }],
            qustionForReset:[{ required: true,  trigger: "blur" }]
        }
    };
    },
    methods: {
        submitForm(formName) {
        this.$refs[formName].validate(valid => {
            if (valid) {
                alert('submit')
            } else {
                return false;
            }
        });
        },
        resetForm(formName) {
            this.$refs[formName].resetFields();
        },
        jump(){
            this.$router.push({path:'/login'});
        }
    }
};
</script>
<style scoped>
.register {
    width: 100%;
    height: 100%;
    min-height: 600px;
    /* background-image: url(..\..\static\img\login\login-bg.jpg);
    background-size: cover;
    background-position: center; */
    position: relative;
}
.registerForm{
    background: rgb(70,55,95);
    display: inline-block;
    border-radius: 4px;
    position: absolute;
    width: 400px;
    padding: 20px;
    height: auto;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
.footSpan{
    cursor: pointer;
    font-size: 12px;
    float: right;
    margin-left: 10px;
    color: #409EFF;
    text-decoration: underline;
}
.foot{
    margin-top: 10px;
}
</style>
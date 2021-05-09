import { reactive, ref } from "vue";
import { useStore } from 'vuex';
import findApi from './findApi.js';
export default function validator () {
    const store = useStore()
    const validateId = (rule, value, callback) => {
        const reg = /^\d{1,}$/
        if (reg.test(value)) {
            if (value == "") {
                callback(new Error("请输入学号"));
            } else if (value.length < 6) {
                callback(new Error("学号位数少于6位"));
            } else {
                callback();
            }
        } else {
            callback(new Error("学号为六位纯数字"))
        }
    }
    const submitForm = () => {
        result.value.validate((valid) => {
            if (valid) {
                loading.value = true
                store.commit('getFindGradeID', id.id)
                findGrides()
            } else {
                return false;
            }
        });
    }
    const rules = {
        id: [{ validator: validateId, trigger: "blur" }],
    };

    /**
     *  成绩查询api
     */

    const findGrides = () => {
        findApi({ value: store.state.exam, id: id.id }).then((result) => {
            stuName.value = result.name
            res.value = result.grade
            container.value = true
            loading.value = false
        }).catch((err) => {
            loading.value = false
            alert(err)
        });
    }
    // 表单验证vnode实例
    const result = ref(null);
    // 控制查询结果显示
    const container = ref(false);
    // 按钮加载
    const loading = ref(false)
    // 学生姓名
    const stuName = ref('')
    // 学生 ID
    const id = reactive({
        id: ""
    })
    // 学生成绩
    const res = ref([])


    return {
        validateId, submitForm, result, rules, container, stuName, loading, res, findGrides, id
    }
}
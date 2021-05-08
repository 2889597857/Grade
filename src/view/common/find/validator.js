import { reactive, ref } from "vue";
import findApi from './findApi.js';
export default function validator (params) {
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
                findGrides(id.id)
            } else {
                return false;
            }
        });
    }
    const rules = {
        id: [{ validator: validateId, trigger: "blur" }],
    };
    const findGrides = (id) => {
        findApi(id).then((result) => {
            stuName.value = result.name
            res.value = result.grade
            stuId.value = result.id
            container.value = true
            loading.value = false
        }).catch((err) => {
            console.log(err)
        });
    }
    const id = reactive({
        id: "",
    });
    const result = ref(null);

    const container = ref(false);
    const loading = ref(false)
    const stuName = ref('')
    const res = ref([])
    const stuId = ref()
    return {
        validateId, submitForm, id, result, rules, container, stuName, loading, res, findGrides, stuId
    }
}
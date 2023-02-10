<template>
    <div>
        <el-table :data="tableData" border style="width: 100%">
            <el-table-column type="selection" width="55" align="center"></el-table-column>
            <el-table-column align="center" :prop="item.prop" :label="item.label" :width="item.width || 'auto'"
                v-for="(item, index) in colData" :key="index">
                <template v-if="item.edit" v-slot="scope">
                    <template v-if="item.type == 'button'">
                        <el-button v-if="scope.row.pay == 1" type="success" plain size="small">
                            已支付
                        </el-button>
                        <el-button v-if="scope.row.pay == 2" type="danger" plain size="small">
                            未支付
                        </el-button>
                    </template>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
export default {
    props: {
        tableData: {
            type: Array,
            required: true,
            default() {
                return []
            }
        },
        colData: {
            type: Array,
            require: true,
            default() {
                return []
            }
        }
    },
    methods: {
        deliver(event) {
            console.log("🚀 ~ file: Table.vue:34 ~ deliver ~ event", event)
        }
    }
}
</script>

<style>

</style>
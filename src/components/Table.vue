<template>
    <div>
        <el-table :data="tableData" border style="width: 100%" v-loading="loading">
            <el-table-column type="selection" width="55" align="center"></el-table-column>
            <el-table-column align="center" :prop="item.prop" :label="item.label" :width="item.width || 'auto'"
                v-for="(item, index) in colData" :key="index">
                <template slot-scope="{row}">
                    <slot :row="row" :col="item">{{ row[item.prop] || '-' }}</slot>
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
        },
        loading: {
            type: Boolean,
            default() {
                return false
            }
        }
    },
    methods: {
        
    }
}
</script>

<style>

</style>
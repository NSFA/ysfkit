'use strict';
/**
 * test 测试用例
 *
 * @author:   波比(｡･∀･)ﾉﾞ
 * @date:     2016-08-27  下午2:47
 */


// parse tag content

const fs = require('fs');

var stream = fs.readFileSync('./config.vue', 'utf-8');

var tagExp = new RegExp("<template[^>]*>([\\s\\S]*?)<\\/template>[\\s\\S]*?<script[^>]*>([\\s\\S]*?)<\\/script>", "ig");
var _tagExp = new RegExp("<template[^>]*>([\\s\\S]*?)<\\/template>[\\s\\S]*?<script[^>]*>([\\s\\S]*?)<\\/script>", "ig");



var exec = tagExp.exec(stream);
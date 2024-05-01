import express from 'express'
import parser from 'body-parser'
import cpp from './cpp.js'
import {dsa} from './dsa.js'
import {java} from './java.js'
import {algo} from './algo.js'
import {dbms} from './dbms.js'
import {os} from './os.js'
import { mocktest,mockstatus } from './mocktest.js'
import { mocktest_table } from './mocktest_table.js'
import { user } from './user.js'
import { update } from './update.js'
import { track } from './track.js'
import {js} from './js.js'
import { react } from './react.js'
import { tracker } from './hosting/index.js'
var app=express()
app.use(parser.urlencoded({ extended: false }))
app.use(parser.json())
app.use((req,res,next)=>{
   express.json()
    res.setHeader('Access-Control-Allow-Origin','*');
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
      );
    next()
})
app.listen(8000)
app.post('/cpp/post',cpp.home)
app.post('/ds/array',dsa.add)


app.get('/ds/tree',dsa.get_tree)
app.get('/ds/graph',dsa.get_graph)
app.get('/ds/stack',dsa.get_stack)
app.get('/ds/hash',dsa.get_hash)
app.get('/ds/trie',dsa.get_trie)
app.get('/ds/segtree',dsa.get_segtree)
app.get('/ds/queue',dsa.get_queue)
app.get('/ds/array',dsa.get_array)
app.get('/ds/linkedlist',dsa.get_linkedlist)

app.get('/cpp/pointer',cpp.get_pointer)
app.get('/cpp/macros',cpp.get_macros)
app.get('/cpp/preprocessor',cpp.get_preprocessor)
app.get('/cpp/templates',cpp.get_templates)
app.get('/cpp/struct',cpp.get_struct)
app.get('/cpp/vector',cpp.get_vector)
app.get('/cpp/map',cpp.get_map)
app.get('/cpp/unordered_map',cpp.get_unordered_map)
app.get('/cpp/set',cpp.get_set)

app.get('/java/array',java.get_array)
app.get('/java/abstract',java.get_abstract)
app.get('/java/Class',java.get_class)
app.get('/java/datatype',java.get_datatype)
app.get('/java/Objects',java.get_objects)
app.get('/java/polymorphism',java.get_polymorphism)
app.get('/java/inheritance',java.get_inheritance)
app.get('/java/string',java.get_string)
app.get('/java/thread',java.get_thread)
app.get('/java/access_specifiers',java.get_access_specifier)

app.get('/algo/time',algo.get_time)
app.get('/algo/Space',algo.get_space)
app.get('/algo/sort',algo.get_sort)
app.get('/algo/Search',algo.get_search)
app.get('/algo/recursions',algo.get_recursion)
app.get('/algo/greedy',algo.get_greedy)

app.get('/dbms/rdbms',dbms.get_rdbms)
app.get('/dbms/constraints',dbms.get_constraints)
app.get('/dbms/ddl',dbms.get_ddl)
app.get('/dbms/dml',dbms.get_dml)
app.get('/dbms/tcl',dbms.get_tcl)
app.get('/dbms/keys',dbms.get_keys)

app.get('/os/basics',os.get_basics)
app.get('/os/structure',os.get_structure)
app.get('/os/scheduling',os.get_scheduling)
app.get('/os/process',os.get_process)
app.get('/os/deadlock',os.get_deadlock)
app.get('/os/threads',os.get_threads)
app.get('/os/main_memory',os.get_main_memory)
app.get('/os/disk',os.get_disk)
app.get('/os/misc',os.get_misc)

app.get('/js/closure',js.get_closure)
app.get('/js/data_types',js.get_datatype)
app.get('/js/object',js.get_object)
app.get('/js/asynchronous',js.get_asynchronous)
app.get('/js/function',js.get_function)
app.get('/js/nan',js.get_nan)

app.get('/react/component',react.component)
app.get('/react/state',react.state)
app.get('/react/props',react.props)
app.get('/react/hooks',react.hooks)
app.get('/react/callbacks',react.callbacks)
app.get('/react/class',react.class)


app.get('/mocktest/cpp',mocktest.cpp)
app.get('/mocktest/java',mocktest.java)
app.get('/mocktest/react',mocktest.react)
app.get('/mocktest/ds',mocktest.ds)
app.get('/mocktest/algo',mocktest.algo)
app.get('/mocktest/cn',mocktest.cn)
app.get('/mocktest/js',mocktest.js)
app.get('/mocktest/dbms',mocktest.dbms)
app.get('/mocktest/aptitude',mocktest.aptitude)


app.get('/mocktest/table/all',mocktest_table.all)
app.get('/mocktest/table/java',mocktest_table.java)
app.get('/mocktest/table/ds',mocktest_table.ds)
app.get('/mocktest/table/algo',mocktest_table.algo)
app.get('/mocktest/table/cn',mocktest_table.cn)
app.get('/mocktest/table/dbms',mocktest_table.dbms)
app.get('/mocktest/table/js',mocktest_table.js)
app.get('/mocktest/table/cpp',mocktest_table.cpp)
app.get('/mocktest/table/html',mocktest_table.html)
app.get('/mocktest/table/aptitude',mocktest_table.aptitude)
app.get('/mocktest/table/numerical',mocktest_table.numerical)
app.get('/mocktest/table/reasoning',mocktest_table.reasoning)

app.post('/mocktest/getstatus/cpp',mockstatus.cpp)
app.post('/mocktest/getstatus/java',mockstatus.java)
app.post('/mocktest/getstatus/aptitude',mockstatus.aptitude)
app.post('/mocktest/getstatus/algo',mockstatus.algo)
app.post('/mocktest/getstatus/cn',mockstatus.cn)
app.post('/mocktest/getstatus/js',mockstatus.js)
app.post('/mocktest/getstatus/dbms',mockstatus.dbms)
app.post('/mocktest/getstatus/ds',mockstatus.ds)
app.post('/mocktest/getstatus/reasoning',mockstatus.reasoning)
app.post('/mocktest/getstatus/numerical',mockstatus.numerical)
app.post('/mocktest/getstatus/all',mockstatus.all)

app.post('/mocktest/updatescore',update.add)

app.post('/auth/new_user',user.add)
app.post('/auth/login',user.find)

app.post('/track/getleaderboard',track.getleaderboard)
app.post('/track/getstats',track.getstats)

app.post('/hosting/isValid',tracker.isValid)

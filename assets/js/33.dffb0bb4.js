(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{559:function(s,a,n){"use strict";n.r(a);var t=n(4),e=Object(t.a)({},(function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h2",{attrs:{id:"binlog恢复误删数据✨"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#binlog恢复误删数据✨"}},[s._v("#")]),s._v(" binlog恢复误删数据✨")]),s._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"title"}),n("p",[s._v("MySQL 中的日志比较重要的有 binlog（归档日志）、redo log（重做日志）以及 undo log")])]),n("h3",{attrs:{id:"_1、详细概述🎇"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1、详细概述🎇"}},[s._v("#")]),s._v(" 1、详细概述🎇")]),s._v(" "),n("p",[n("strong",[s._v("binlog 是 MySQL Server 层的日志，而不是存储引擎自带的日志，它记录了所有的 DDL 和 DML(不包含数据查询语句)语句，而且是以事件形式记录，还包含语句所执行的消耗的时间等")])]),s._v(" "),n("div",{staticClass:"custom-block theorem"},[n("p",{staticClass:"title"},[s._v("需要注意的是：")]),n("p",[s._v("1、binlog 是一种逻辑日志，他里边所记录的是一条 SQL 语句的原始逻辑，例如给某一个字段 +1，注意这个区别于 redo log 的物理日志（在某个数据页上做了什么修改）")]),s._v(" "),n("p",[s._v("2、binlog 文件写满后，会自动切换到下一个日志文件继续写，而不会覆盖以前的日志，这个也区别于 redo log，redo log 是循环写入的，即后面写入的可能会覆盖前面写入的")]),s._v(" "),n("p",[s._v("3、一般来说，我们在配置 binlog 的时候，可以指定 binlog 文件的有效期，这样在到期后，日志文件会自动删除，这样避免占用较多存储空间")]),s._v(" "),n("div",{staticClass:"custom-block right"})]),n("p",[n("strong",[s._v("根据 MySQL 官方文档的介绍，开启 binlog 之后，大概会有 1% 的性能损耗，不过这还是可以接受的，一般来说，binlog 有两个重要的使用场景：")])]),s._v(" "),n("ul",[n("li",[s._v("MySQL 主从复制时：在主机上开启 binlog，主机将 binlog 同步给从机，从机通过 binlog 来同步数据，进而实现主机和从机的数据同步。")]),s._v(" "),n("li",[s._v("MySQL 数据恢复，通过使用 mysqlbinlog 工具再结合 binlog 文件，可以将数据恢复到过去的某一时刻。")])]),s._v(" "),n("h3",{attrs:{id:"_2、开启binlog🌋"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2、开启binlog🌋"}},[s._v("#")]),s._v(" 2、开启binlog🌋")]),s._v(" "),n("div",{staticClass:"language-sql line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sql"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- 登录mysql查看binlog日志的状态，off为关闭状态")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SHOW")]),s._v(" VARIABLES "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("LIKE")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'log_bin%'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("p",[n("strong",[s._v("开启 binlog : vim /etc/my.cnf")]),s._v("🛻")]),s._v(" "),n("div",{staticClass:"language-xml line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-xml"}},[n("code",[s._v("# 开启，并且可以将mysql-bin改为其它的日志名\n# log-bin=mysql-bin\nlog-bin=my-bin\n\n# 超过200M将生产新的文件，最大和默认值是1GB\n# 设置最大 100MB\nmax_binlog_size=104857600\n\n# 设置了 binlog 文件的有效期（单位：天）\nexpire_logs_days = 7\n\n# 此参数配置binlog的日志格式，默认为mixed。\nbinlog_format=mixed\n\n# binlog 日志只记录指定库的更新（配置主从复制的时候会用到）\n#binlog-do-db=my_db\n\n# binlog 日志不记录指定库的更新（配置主从复制的时候会用到）\n#binlog-ignore-db=my_no_db\n\n# 写缓存多少次，刷一次磁盘，默认 0 表示这个操作由操作系统根据自身负载自行决定多久写一次磁盘\n# 1 表示每一条事务提交都会立即写磁盘，n 则表示 n 个事务提交才会写磁盘\nsync_binlog=0\n\n# 添加id号，如果做主从，就不能一样\nserver-id=1\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br")])]),n("p",[s._v("配置完成后，重启 mysql ，重启之后，再次执行 show variables like 'log_bin%'; 即可看到 binlog 已经开启了。")]),s._v(" "),n("div",{staticClass:"language-sql line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sql"}},[n("code",[s._v("mysql"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("show")]),s._v(" variables "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("like")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'log_bin%'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("---------------------------------+-------------------------------------------------------------+")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" Variable_name                   "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Value")]),s._v("                                                       "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("---------------------------------+-------------------------------------------------------------+")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" log_bin                         "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ON")]),s._v("                                                          "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" log_bin_basename                "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" G:\\java\\"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("sql")]),s._v("\\MySQL Server "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("8.0")]),s._v("\\"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Data")]),s._v("\\LAPTOP"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("RDCIFBH0"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("bin       "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" log_bin_index                   "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" G:\\java\\"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("sql")]),s._v("\\MySQL Server "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("8.0")]),s._v("\\"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Data")]),s._v("\\LAPTOP"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("RDCIFBH0"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("bin"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("index")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" log_bin_trust_function_creators "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("OFF")]),s._v("                                                         "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" log_bin_use_v1_row_events       "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("OFF")]),s._v("                                                         "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("---------------------------------+-------------------------------------------------------------+")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("rows")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("in")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("set")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" warning "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.00")]),s._v(" sec"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br")])]),n("ul",[n("li",[s._v("log_bin_basename：这个是将来产生的 binlog 日志文件的名称前缀，换句话说，根据大家目前所看到的配置，将来产生的 binlog 日志文件名为 my-bin.xxx，这个文件中将会用来记录所有的 DDL 和 DML 语句事件。")]),s._v(" "),n("li",[s._v("log_bin_index：这个是 binlog 的索引文件，保存了所有 binlog 的目录，因为 binlog 可能会有多个。")])]),s._v(" "),n("h3",{attrs:{id:"_3-常见-binlog-操作👍"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-常见-binlog-操作👍"}},[s._v("#")]),s._v(" 3. 常见 binlog 操作👍")]),s._v(" "),n("div",{staticClass:"language-sql line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sql"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- 查看所有binlog日志列表")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("show")]),s._v(" master logs"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- 查看master状态，即最后(最新)一个binlog日志的编号名称，及其最后一个操作事件pos结束点(Position)值")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("show")]),s._v(" master "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("status")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- 刷新 binlog:正常来说，一个 binlog 写满之后，会自动切换到下一个 binlog 开始写，不过我们也可以执行一个 flush logs 命令来手动刷新 binlog;")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- 手动刷新 binlog 之后，就会产生一个新的 binlog 日志文件，接下来所有的 binlog 日志都将记录到新的文件中。")]),s._v("\nflush logs\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- 重置 binlog")]),s._v("\nreset master\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- 查看 binlog")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- 为了查看 binlog，MySQL 为我们提供了两个官方工具，我们一个一个来看，首先是 mysqlbinlog 命令")]),s._v("\nmysqlbinlog "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("var"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("lib"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("mysql"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("my"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("bin"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("00001")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- 方法2：这个表示以事件的方式来查看 binlog")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("show")]),s._v(" binlog events "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("IN")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'log_name'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" pos"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("LIMIT")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("offset")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" row_count"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- log_name：可以指定要查看的 binlog 日志文件名，如果不指定的话，表示查看最早的 binlog 文件。")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- pos：从哪个 pos 点开始查看，凡是 binlog 记录下来的操作都有一个 pos 点，这个其实就是相当于我们可以指定从哪个操作开始查看日志，如果不指定的话，就是从该 binlog 的开头开始查看。")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- offset：这是是偏移量，不指定默认就是 0。")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- row_count：查看多少行记录，不指定就是查看所有。")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br")])]),n("h3",{attrs:{id:"_4、使用binlog恢复数据🧐"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4、使用binlog恢复数据🧐"}},[s._v("#")]),s._v(" 4、使用binlog恢复数据🧐")]),s._v(" "),n("div",{staticClass:"custom-block danger"},[n("p",{staticClass:"title"},[s._v("注意点：")]),n("p",[s._v("恢复的时候要配合全备份，先进行全备份，在用 mysqldump 全备时添加-F刷新binlog，这时候mysqldump备份的是最新的binlog日志之前的内容了。")]),s._v(" "),n("p",[s._v("先进行全备份恢复，再将最新的binlog文件用mysqlbinlog进行查看，grep或者其他方式过滤，找到有问题的sql语句，记录下当时的pos点或者时间。只恢复出问题之前得时间点即可。")])]),n("div",{staticClass:"language-sql line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sql"}},[n("code",[s._v("mysqldump "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("uroot "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("p "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("--flush-logs --lock-tables -B mydb>/root/my.bak.sql")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- --flush-logs：这个表示在导出之前先刷新 binlog，刷新 binlog 之后将会产生新的 binlog 文件，后续的操作都存在新的 binlog 中。")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- --lock-tables：这个表示开始导出前，锁定所有表。需要注意的是当导出多个数据库时，lock-tables 分别为每个数据库锁定表")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- 因此这个选项不能保证导出文件中的表在数据库之间的逻辑一致性，不同数据库表的导出状态可以完全不同。")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- -B：这个表示指定导出的数据库名称，如果使用 `--all-databases` 或者 `-A` 代替 `-B` 表示导出所有的数据库。")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br")])]),n("p",[n("strong",[s._v("通过binlog还原数据库")])]),s._v(" "),n("div",{staticClass:"language-sql line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sql"}},[n("code",[s._v("mysqlbinlog "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("var"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("lib"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("mysql"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("my"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("bin"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("000002")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("--stop-position=764 --database=mydb | mysql -uroot -p")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("div",{staticClass:"custom-block theorem"},[n("p",{staticClass:"title"},[s._v("常用参数选项解释：")]),n("p",[s._v("--start-position= 875 起始pos点")]),s._v(" "),n("p",[s._v("--stop-position= 954 结束pos点")]),s._v(" "),n("p",[s._v('--start-datetime="2016-9-25 22:01:08" 起始时间点')]),s._v(" "),n("p",[s._v('--stop-datetime="2019-9-25 22:09:46" 结束时间点')]),s._v(" "),n("p",[s._v("--database=mydb 指定只恢复mydb数据库(一台主机上往往有多个数据库，只限本地log日志)")])])])}),[],!1,null,null,null);a.default=e.exports}}]);
Nuxt生命週期大全
===
## 流程
1. Server Side Render (1~36)
2. Client Side Render (1~42)
3. Route Push to Page2 (43~87)
4. Route Push to Index (88~132)

## 結果
# Server Side Render
* plugins [server] 1
* mixins-page beforeRouteEnter [server] 2
* pages/index.vue beforeRouteEnter [server] 3
* store actions.js nuxtServerInit [server] 4
* middleware nuxt.config.js common [server] 5
* pages/index.vue layout [server] 6
* pages/index.vue validate [server] 7
* pages/index.vue asyncData [server] 8
* mixins-layout beforeCreate [server] 9
* layouts/default.vue beforeCreate [server] 10
* layouts/default.vue data [server] 11
* mixins-layout data [server] 12
* mixins-layout created [server] 13
* layouts/default.vue created [server] 14
* mixins-layout serverPrefetch [server] 15
* layouts/default.vue serverPrefetch [server] 16
* layouts/default.vue fetch [server] 17
* pages/index.vue key [server] 18
* mixins-page beforeCreate [server] 19
* pages/index.vue beforeCreate [server] 20
* pages/index.vue data [server] 21
* mixins-page data [server] 22
* mixins-page created [server] 23
* pages/index.vue created [server] 24
* mixins-page serverPrefetch [server] 25
* pages/index.vue serverPrefetch [server] 26
* pages/index.vue fetch [server] 27
* mixins-component beforeCreate [server] 28
* components/Logo.vue beforeCreate [server] 29
* components/Logo.vue data [server] 30
* mixins-component data [server] 31
* mixins-component created [server] 32
* components/Logo.vue created [server] 33
* mixins-component serverPrefetch [server] 34
* components/Logo.vue serverPrefetch [server] 35
* components/Logo.vue fetch [server] 36


# Client Side Render
* plugins [client] 1
* mixins-page beforeRouteEnter [client] 2
* pages/index.vue beforeRouteEnter [client] 3
* pages/index.vue transition [client] 4
* mixins-layout beforeCreate [client] 5
* layouts/default.vue beforeCreate [client] 6
* layouts/default.vue data [client] 7
* mixins-layout data [client] 8
* mixins-layout created [client] 9
* layouts/default.vue created [client] 10
* layouts/default.vue head [client] 11
* mixins-layout beforeMount [client] 12
* layouts/default.vue beforeMount [client] 13
* pages/index.vue key [client] 14
* mixins-page beforeCreate [client] 15
* pages/index.vue beforeCreate [client] 16
* pages/index.vue data [client] 17
* mixins-page data [client] 18
* mixins-page created [client] 19
* pages/index.vue created [client] 20
* pages/index.vue head [client] 21
* mixins-page beforeMount [client] 22
* pages/index.vue beforeMount [client] 23
* mixins-page mounted [client] 24
* pages/index.vue mounted [client] 25
* mixins-layout mounted [client] 26
* layouts/default.vue mounted [client] 27
* mixins-page beforeUpdate [client] 28
* pages/index.vue beforeUpdate [client] 29
* mixins-component beforeCreate [client] 30
* components/Logo.vue beforeCreate [client] 31
* components/Logo.vue data [client] 32
* mixins-component data [client] 33
* mixins-component created [client] 34
* components/Logo.vue created [client] 35
* components/Logo.vue head [client] 36
* mixins-component beforeMount [client] 37
* components/Logo.vue beforeMount [client] 38
* mixins-component mounted [client] 39
* components/Logo.vue mounted [client] 40
* mixins-page updated [client] 41
* pages/index.vue updated [client] 42

# Route Push to Page2
* mixins-page beforeRouteLeave [client] 43
* pages/index.vue beforeRouteLeave [client] 44
* pages/page2.vue watchQuery [client] 45
* pages/page2.vue transition [client] 46
* pages/index.vue transition [client] 47
* middleware nuxt.config.js common [client] 48
* pages/page2.vue layout [client] 49
* pages/page2.vue validate [client] 50
* pages/page2.vue asyncData [client] 51
* mixins-page beforeRouteEnter [client] 52
* pages/page2.vue beforeRouteEnter [client] 53
* pages/page2.vue layout [client] 54
* pages/page2.vue key [client] 55
* mixins-page beforeDestroy [client] 56
* pages/index.vue beforeDestroy [client] 57
* mixins-component beforeDestroy [client] 58
* components/Logo.vue beforeDestroy [client] 59
* mixins-component destroyed [client] 60
* components/Logo.vue destroyed [client] 61
* mixins-page destroyed [client] 62
* pages/index.vue destroyed [client] 63
* mixins-page beforeCreate [client] 64
* pages/page2.vue beforeCreate [client] 65
* pages/page2.vue data [client] 66
* mixins-page data [client] 67
* mixins-page created [client] 68
* pages/page2.vue created [client] 69
* pages/page2.vue head [client] 70
* mixins-page beforeMount [client] 71
* pages/page2.vue beforeMount [client] 72
* pages/page2.vue fetch [client] 73
* mixins-component beforeCreate [client] 74
* components/Logo.vue beforeCreate [client] 75
* components/Logo.vue data [client] 76
* mixins-component data [client] 77
* mixins-component created [client] 78
* components/Logo.vue created [client] 79
* components/Logo.vue head [client] 80
* mixins-component beforeMount [client] 81
* components/Logo.vue beforeMount [client] 82
* components/Logo.vue fetch [client] 83
* mixins-component mounted [client] 84
* components/Logo.vue mounted [client] 85
* mixins-page mounted [client] 86
* pages/page2.vue mounted [client] 87

# Route Push to Index
* mixins-page beforeRouteLeave [client] 88
* pages/page2.vue beforeRouteLeave [client] 89
* pages/index.vue watchQuery [client] 90
* pages/index.vue transition [client] 91
* pages/page2.vue transition [client] 92
* middleware nuxt.config.js common [client] 93
* pages/index.vue layout [client] 94
* pages/index.vue validate [client] 95
* pages/index.vue asyncData [client] 96
* mixins-page beforeRouteEnter [client] 97
* pages/index.vue beforeRouteEnter [client] 98
* pages/index.vue layout [client] 99
* pages/index.vue key [client] 100
* mixins-page beforeDestroy [client] 101
* pages/page2.vue beforeDestroy [client] 102
* mixins-component beforeDestroy [client] 103
* components/Logo.vue beforeDestroy [client] 104
* mixins-component destroyed [client] 105
* components/Logo.vue destroyed [client] 106
* mixins-page destroyed [client] 107
* pages/page2.vue destroyed [client] 108
* mixins-page beforeCreate [client] 109
* pages/index.vue beforeCreate [client] 110
* pages/index.vue data [client] 111
* mixins-page data [client] 112
* mixins-page created [client] 113
* pages/index.vue created [client] 114
* pages/index.vue head [client] 115
* mixins-page beforeMount [client] 116
* pages/index.vue beforeMount [client] 117
* pages/index.vue fetch [client] 118
* mixins-component beforeCreate [client] 119
* components/Logo.vue beforeCreate [client] 120
* components/Logo.vue data [client] 121
* mixins-component data [client] 122
* mixins-component created [client] 123
* components/Logo.vue created [client] 124
* components/Logo.vue head [client] 125
* mixins-component beforeMount [client] 126
* components/Logo.vue beforeMount [client] 127
* components/Logo.vue fetch [client] 128
* mixins-component mounted [client] 129
* components/Logo.vue mounted [client] 130
* mixins-page mounted [client] 131
* pages/index.vue mounted [client] 132
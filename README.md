Nuxt生命週期大全
===
## 流程
1. Server Side Rander (1~28)
2. Client Side Rander (29~65)
3. Route Push to Page2 (66~100)
4. Route Push to Index (101~135)

## 結果
# Server Side Rander
* plugins [server] 1
* mixins-page beforeRouteEnter [server] 2
* index.vue beforeRouteEnter [server] 3
* nuxtServerInit [server] 4
* middleware common [server] 5
* index.vue validate [server] 6
* index.vue asyncData [server] 7
* mixins-layout beforeCreate [server] 8
* layout beforeCreate [server] 9
* layout data [server] 10
* mixins-layout data [server] 11
* mixins-layout created [server] 12
* layout created [server] 13
* layout fetch [server] 14
* mixins-page beforeCreate [server] 15
* index.vue beforeCreate [server] 16
* index.vue data [server] 17
* mixins-page data [server] 18
* mixins-page created [server] 19
* index.vue created [server] 20
* index.vue fetch [server] 21
* mixins-component beforeCreate [server] 22
* component beforeCreate [server] 23
* component data [server] 24
* mixins-component data [server] 25
* mixins-component created [server] 26
* component created [server] 27
* component fetch [server] 28


# Client Side Rander
* plugins [client] 29
* mixins-page beforeRouteEnter [client] 30 69 104
* index.vue beforeRouteEnter [client] 31 105
* mixins-layout beforeCreate [client] 32
* layout beforeCreate [client] 33
* layout data [client] 34
* mixins-layout data [client] 35
* mixins-layout created [client] 36
* layout created [client] 37
* mixins-layout beforeMount [client] 38
* layout beforeMount [client] 39
* mixins-page beforeCreate [client] 40 79 114
* index.vue beforeCreate [client] 41 115
* index.vue data [client] 42 116
* mixins-page data [client] 43 82 117
* mixins-page created [client] 44 83 118
* index.vue created [client] 45 119
* mixins-page beforeMount [client] 46 85 120
* index.vue beforeMount [client] 47 121
* mixins-page mounted [client] 48 99 134
* index.vue mounted [client] 49 135
* mixins-layout mounted [client] 50
* layout mounted [client] 51
* mixins-page beforeUpdate [client] 52
* index.vue beforeUpdate [client] 53
* mixins-component beforeCreate [client] 54 88 123
* component beforeCreate [client] 55 89 124
* component data [client] 56 90 125
* mixins-component data [client] 57 91 126
* mixins-component created [client] 58 92 127
* component created [client] 59 93 128
* mixins-component beforeMount [client] 60 94 129
* component beforeMount [client] 61 95 130
* mixins-component mounted [client] 62 97 132
* component mounted [client] 63 98 133
* mixins-page updated [client] 64
* index.vue updated [client] 65

# Route Push to Page2

* middleware common [client] 66 101
* page2.vue validate [client] 67
* page2.vue asyncData [client] 68
* mixins-page beforeRouteEnter [client] 30 69 104
* page2.vue beforeRouteEnter [client] 70
* mixins-page beforeDestroy [client] 71 106
* index.vue beforeDestroy [client] 72
* mixins-component beforeDestroy [client] 73 108
* component beforeDestroy [client] 74 109
* mixins-component destroyed [client] 75 110
* component destroyed [client] 76 111
* mixins-page destroyed [client] 77 112
* index.vue destroyed [client] 78
* mixins-page beforeCreate [client] 40 79 114
* page2.vue beforeCreate [client] 80
* page2.vue data [client] 81
* mixins-page data [client] 43 82 117
* mixins-page created [client] 44 83 118
* page2.vue created [client] 84
* mixins-page beforeMount [client] 46 85 120
* page2.vue beforeMount [client] 86
* page2.vue fetch [client] 87
* mixins-component beforeCreate [client] 54 88 123
* component beforeCreate [client] 55 89 124
* component data [client] 56 90 125
* mixins-component data [client] 57 91 126
* mixins-component created [client] 58 92 127
* component created [client] 59 93 128
* mixins-component beforeMount [client] 60 94 129
* component beforeMount [client] 61 95 130
* component fetch [client] 96 131
* mixins-component mounted [client] 62 97 132
* component mounted [client] 63 98 133
* mixins-page mounted [client] 48 99 134
* page2.vue mounted [client] 100

# Route Push to Index
* middleware common [client] 66 101
* index.vue validate [client] 102
* index.vue asyncData [client] 103
* mixins-page beforeRouteEnter [client] 30 69 104
* index.vue beforeRouteEnter [client] 31 105
* mixins-page beforeDestroy [client] 71 106
* page2.vue beforeDestroy [client] 107
* mixins-component beforeDestroy [client] 73 108
* component beforeDestroy [client] 74 109
* mixins-component destroyed [client] 75 110
* component destroyed [client] 76 111
* mixins-page destroyed [client] 77 112
* page2.vue destroyed [client] 113
* mixins-page beforeCreate [client] 40 79 114
* index.vue beforeCreate [client] 41 115
* index.vue data [client] 42 116
* mixins-page data [client] 43 82 117
* mixins-page created [client] 44 83 118
* index.vue created [client] 45 119
* mixins-page beforeMount [client] 46 85 120
* index.vue beforeMount [client] 47 121
* index.vue fetch [client] 122
* mixins-component beforeCreate [client] 54 88 123
* component beforeCreate [client] 55 89 124
* component data [client] 56 90 125
* mixins-component data [client] 57 91 126
* mixins-component created [client] 58 92 127
* component created [client] 59 93 128
* mixins-component beforeMount [client] 60 94 129
* component beforeMount [client] 61 95 130
* component fetch [client] 96 131
* mixins-component mounted [client] 62 97 132
* component mounted [client] 63 98 133
* mixins-page mounted [client] 48 99 134
* index.vue mounted [client] 49 135
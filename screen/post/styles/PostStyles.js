import {StyleSheet, Platform} from "react-native"
export const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: "#E9EBEE"
    },
    text:{
        color: "black"
    },
    container_header:{
        backgroundColor: "#FFF",
        height: Platform.OS == "ios" ? 100 : 56,
        paddingTop : Platform.OS =="ios" ? 64 : 15,
        paddingLeft: 20,
        paddingRight: 20
    },
    container_header_content:{
        flexDirection: "row",
        justifyContent: "space-between",
        // borderBottomWidth: 1,
        // borderBottomColor: "#CCC",
        alignItems: "center"     
    },
    container_header__text:{
        fontSize: 16,
        fontWeight: "500",
        color: "black"
    },
    container_avatar:{
        backgroundColor: "#FFF",
        height:90,
        marginTop: 1
    },
    container_avatar__sub:{
        alignItems: "center",
        margin:10
    },
    container_avatar__image:{
        height: 56,
        width: 56,
        borderRadius: 28
    },
    container_feed:{
        marginTop: 1,
        padding:10,
        backgroundColor: "white"
    },
    container_feed_header:{
        flexDirection: "row",
        justifyContent: "space-between"
    },
    container_feed_header_container:{
        flexDirection: "row"
    },
    container_feed_header_container_title:{
        marginLeft:10
    },
    container_feed_header_container_title_name:{
        flexDirection: "row",
        justifyContent:"space-between"
    },
    container_footer:{
        width: 90,
        marginTop:10,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    container_footer_component:{
        flexDirection: "row",
        alignItems: "center"
    },
    container_footer_component__image:{
        width:28,
        height: 28,
        marginRight: 4
    }
});
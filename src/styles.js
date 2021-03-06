import { makeStyles } from '@material-ui/core';             // HOW TO ADD STYLES TO MATRIAL UI

export default makeStyles(() => ({
    appBar: {
      borderRadius: 15,
      margin: '30px 0',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    heading: {
      color:  '#6600ff',
    },
    image: {
      marginLeft: '15px',
    },
  }))
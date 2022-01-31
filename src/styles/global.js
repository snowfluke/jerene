import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    width: '90%',
    alignSelf: 'center',
  },

  threeLine: {
    width: 25,
    height: 4,
    backgroundColor: '#1A1A1A',
    marginBottom: 3,
  },

  leftHeader: {
    flex: 1,
    alignItems: 'flex-start',
    flexDirection: 'row',
  },

  rightHeader: {
    flex: 1,
    alignItems: 'flex-end',
  },

  verticalContainer: {
    width: 30,
    marginRight: 15,
    height: 'auto',
  },

  verticalCard: {
    backgroundColor: 'black',
    paddingVertical: 16,
  },

  verticalText: {
    color: 'white',
    fontSize: 16,
    fontFamily: 'Raleway-SemiBold',
    textAlign: 'center',
  },

  quoteHomeBox: {
    flex: 1,
    marginBottom: 10,
  },

  quoteHomeBoxText: {
    fontFamily: 'Raleway-Bold',
    fontSize: 36,
    color: '#1A1A1A',
  },

  quoteHomeBoxAuthor: {
    width: ' 100%',
    alignItems: 'flex-end',
  },

  quoteHomeBoxAuthorText: {
    color: '#1A1A1A',
    fontFamily: 'Raleway-Light',
    fontSize: 20,
  },

  box: {
    width: 40,
    borderWidth: 3,
    borderColor: '#1A1A1A',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },

  line: {
    flex: 1,
    height: 3,
    backgroundColor: '#1A1A1A',
  },

  bbl: {
    marginBottom: 0,
    flexDirection: 'row',
    alignItems: 'center',
  },

  boxText: {
    fontSize: 20,
    color: '#1A1A1A',
  },

  cardCategory: {
    width: '100%',
    marginBottom: 10,
  },
  cardCategoryTop: {
    backgroundColor: 'black',
    paddingHorizontal: 10,
    paddingBottom: 10,
  },
  cardCategoryBottom: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
  },
  cardCategoryMiddle: {
    fontSize: 50,
    fontFamily: 'Raleway-Bold',
    color: 'white',
  },

  quoteList: {
    width: '100%',
    marginVertical: 10,
  },

  quoteListText: {
    fontSize: 20,
    color: 'black',
  },

  textInputWrapper: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    marginVertical: 10,
  },

  textInput: {
    borderWidth: 3,
    borderColor: 'black',
    textAlign: 'center',
    paddingVertical: 10,
    paddingHorizontal: 15,
    color: 'black',
    fontSize: 16,
  },

  textInputTitle: {
    color: 'black',
    fontWeight: '700',
    textAlign: 'right',
    fontSize: 30,
  },
});

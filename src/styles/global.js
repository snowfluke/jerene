import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    width: '80%',
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
    marginBottom: 30,
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
    marginBottom: 30,
    flexDirection: 'row',
    alignItems: 'center',
  },

  boxText: {
    fontSize: 20,
    color: '#1A1A1A',
  },
});

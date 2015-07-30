import AppDispatcher from '../dispatcher/app_dispatcher';
import HomeBoardConstants from '../constants/home_board_constants';

module.exports = {
  handleKeyDown: function(event) {
    AppDispatcher.handleKeyDown({
      actionType: HomeBoardConstants.HOME_BOARD_KEY_DOWN,
      event: event
    })
  }
}


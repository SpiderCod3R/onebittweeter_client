// The initial state of the App
const initialState = { hashtags: [] };

export default function (state = initialState, action) {
  switch (action.type) {
    case 'UPDATE_TRENDINGS':
      return { hashtags: [['#OneBitCode', '500k'], ['#RubyOnRails', '20k']] }
    default:
      return state;
  }
}
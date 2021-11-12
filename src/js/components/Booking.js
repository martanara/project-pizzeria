import {select, templates} from './../settings.js';
import utils from './../utils.js';
import AmountWidget from './AmountWidget.js';

class Booking {
  constructor(bookingWidget){
    const thisBooking = this;

    thisBooking.render(bookingWidget);
    thisBooking.initWidgets();
  }
  render(bookingWidget){
    const thisBooking = this;
    const bookingTemplate = templates.bookingWidget();
    const generatedDOM = utils.createDOMFromHTML(bookingTemplate);

    thisBooking.dom = {};

    thisBooking.dom.wrapper = bookingWidget;
    thisBooking.dom.peopleAmount = generatedDOM.querySelector(select.booking.peopleAmount);
    thisBooking.dom.hoursAmount = generatedDOM.querySelector(select.booking.hoursAmount);

    thisBooking.dom.wrapper.innerHTML = bookingTemplate;
  }
  initWidgets(){
    const thisBooking = this;

    thisBooking.peopleAmountWidget = new AmountWidget(thisBooking.dom.peopleAmount);
    thisBooking.hoursAmountWidget = new AmountWidget(thisBooking.dom.hoursAmount);

    thisBooking.dom.peopleAmount.addEventListener('update', function(){
    });

    thisBooking.dom.hoursAmount.addEventListener('update', function(){
    });
  }
}

export default Booking;

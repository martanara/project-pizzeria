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

    const generatedHTML = templates.bookingWidget();

    thisBooking.dom = {};
    thisBooking.dom.wrapper = bookingWidget;
    thisBooking.dom.wrapper.innerHTML = generatedHTML;
    thisBooking.dom.peopleAmount = thisBooking.dom.wrapper.querySelector(select.booking.peopleAmount);
    thisBooking.dom.hoursAmount = thisBooking.dom.wrapper.querySelector(select.booking.hoursAmount);
  }
  initWidgets(){
    const thisBooking = this;
    thisBooking.peopleAmountWidget = new AmountWidget(thisBooking.dom.peopleAmount);
    thisBooking.hoursAmountWidget = new AmountWidget(thisBooking.dom.hoursAmount);
    thisBooking.dom.peopleAmount.addEventListener('updated',function(event){
      event.preventDefault();
    });
    thisBooking.dom.hoursAmount.addEventListener('updated',function(event){
      event.preventDefault();
    });



    /* const thisBooking = this;

    thisBooking.peopleAmountWidget = new AmountWidget(thisBooking.dom.peopleAmount);
    console.log('thisBooking.peopleAmountWidget', thisBooking.peopleAmountWidget)
    thisBooking.hoursAmountWidget = new AmountWidget(thisBooking.dom.hoursAmount);
    console.log('thisBooking.hoursAmountWidget', thisBooking.hoursAmountWidget)
    thisBooking.dom.peopleAmount.addEventListener('updated', function(event){
      event.preventDeafult();
    });

    thisBooking.dom.hoursAmount.addEventListener('update', function(event){
      event.preventDeafult();
    });
    */
  }
}

export default Booking;

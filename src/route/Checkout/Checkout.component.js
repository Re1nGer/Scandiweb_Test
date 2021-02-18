import ContentWrapper from 'SourceComponent/ContentWrapper/ContentWrapper.component';
import { Checkout as SourceCheckout } from 'SourceRoute/Checkout/Checkout.component';
import {
    BILLING_STEP,
    SHIPPING_STEP
} from 'SourceRoute/Checkout/Checkout.config';

import './Checkout.extension.style.scss';
/** @namespace myApp/Route/Checkout/Component/CheckoutComponent */
export class CheckoutComponent extends SourceCheckout {
    renderCheckOutProgressBar() {
        const { checkoutStep } = this.props;

        if (checkoutStep === SHIPPING_STEP) {
            return (
                <div className="Progress">
                    <div className="PointsWrapper">
                    <div className="PointWrapper">
                        <div className="Point">1</div>
                        <h4>Shipping</h4>
                    </div>
                    <div className="PointWrapper">
                        <div className="Point">2</div>
                        <h4>Review & Payments</h4>
                    </div>
                    </div>
                </div>
            );
        } if (checkoutStep === BILLING_STEP) {
            return (
                <div className="Progress">
                    <div className="PointsWrapper">
                    <div className="PointWrapper">
                        <div className="Point TickMark" />
                        <h4>Shipping</h4>
                    </div>
                    <div className="PointWrapper">
                        <div className="Point" />
                        <h4>Review & Payments</h4>
                    </div>
                    </div>
                </div>
            );
        }

        return null;
    }

    render() {
        return (
            <main block="Checkout">
                { this.renderCheckOutProgressBar() }
                <ContentWrapper
                  wrapperMix={ { block: 'Checkout', elem: 'Wrapper' } }
                  label={ __('Checkout page') }
                >
                    { this.renderSummary(true) }
                    <div block="Checkout" elem="Step">
                        { this.renderTitle() }
                        { this.renderGuestForm() }
                        { this.renderStep() }
                        { this.renderLoader() }
                    </div>
                    <div>
                        { this.renderSummary() }
                        { this.renderPromo() }
                        { this.renderCoupon() }
                    </div>
                </ContentWrapper>
            </main>
        );
    }
}

export default CheckoutComponent;

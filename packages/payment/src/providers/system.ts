import {
  PaymentProviderContext,
  PaymentProviderError,
  PaymentProviderSessionResponse,
  PaymentSessionStatus,
} from "@medusajs/types"
import { AbstractPaymentProvider } from "@medusajs/utils"

export class SystemProviderService extends AbstractPaymentProvider {
  static identifier = "system"

  async createPayment(_): Promise<Record<string, unknown>> {
    return {}
  }

  async getStatus(_): Promise<string> {
    return "authorized"
  }

  async getPaymentData(_): Promise<Record<string, unknown>> {
    return {}
  }

  async initiatePayment(
    context: PaymentProviderContext
  ): Promise<PaymentProviderSessionResponse> {
    return { session_data: {} }
  }

  async getPaymentStatus(
    paymentSessionData: Record<string, unknown>
  ): Promise<PaymentSessionStatus> {
    throw new Error("Method not implemented.")
  }

  async retrievePayment(
    paymentSessionData: Record<string, unknown>
  ): Promise<Record<string, unknown> | PaymentProviderError> {
    return {}
  }

  async authorizePayment(_): Promise<
    | PaymentProviderError
    | {
        status: PaymentSessionStatus
        data: PaymentProviderSessionResponse["session_data"]
      }
  > {
    return { data: {}, status: PaymentSessionStatus.AUTHORIZED }
  }

  async updatePaymentData(_): Promise<Record<string, unknown>> {
    return {}
  }

  async updatePayment(
    _
  ): Promise<PaymentProviderError | PaymentProviderSessionResponse> {
    return { session_data: {} } as PaymentProviderSessionResponse
  }

  async deletePayment(_): Promise<Record<string, unknown>> {
    return {}
  }

  async capturePayment(_): Promise<Record<string, unknown>> {
    return {}
  }

  async refundPayment(_): Promise<Record<string, unknown>> {
    return {}
  }

  async cancelPayment(_): Promise<Record<string, unknown>> {
    return {}
  }
}

export default SystemProviderService
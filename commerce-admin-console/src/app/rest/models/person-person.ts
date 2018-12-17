/* tslint:disable */
import { PersonPersonAttributes } from './person-person-attributes';
import { PersonPersonContact } from './person-person-contact';
import { PersonPersonContextAttribute } from './person-person-context-attribute';
import { ComIbmCommerceMemberFacadeDatatypesIncomeAmountType } from './com-ibm-commerce-member-facade-datatypes-income-amount-type';
import { ComIbmCommerceFoundationCommonDatatypesOrganizationIdentifierType } from './com-ibm-commerce-foundation-common-datatypes-organization-identifier-type';
import { ComIbmCommerceFoundationCommonDatatypesPersonIdentifierType } from './com-ibm-commerce-foundation-common-datatypes-person-identifier-type';
import { PersonPersonReceiveEmailPreference } from './person-person-receive-email-preference';
import { PersonPersonReceiveSMSPreference } from './person-person-receive-smspreference';
import { PersonPersonUserDataField } from './person-person-user-data-field';
export interface PersonPerson {
  maritalStatus?: string;
  accountStatus?: 'Enabled' | 'Disabled';
  addressLine?: Array<string>;
  addressType?: string;
  attributes?: Array<PersonPersonAttributes>;
  bestCallingTime?: string;
  businessTitle?: string;
  challengeQuestion: string;
  city?: string;
  companyName?: string;
  contact?: Array<PersonPersonContact>;
  contextAttribute?: Array<PersonPersonContextAttribute>;
  country?: string;
  dateOfBirth?: string;
  departmentNumber?: string;
  description?: string;
  displayName?: string;
  distinguishedName?: string;
  email1: string;
  email2: string;
  employeeID?: string;
  employeeType?: string;
  fax1: string;
  fax2: string;
  firstName?: string;
  gender?: 'Male' | 'Female' | 'Unspecified';
  geographicalShippingCode?: string;
  geographicalTaxCode?: string;
  hobbies?: string;
  householdSize?: string;
  income?: ComIbmCommerceMemberFacadeDatatypesIncomeAmountType;
  internalOfficeAddress?: string;
  language?: string;
  lastName?: string;
  lastUpdate?: string;
  logonId: string;
  manager?: string;
  addressId?: string;
  middleName?: string;
  mobilePhone1: string;
  mobilePhone1Country: string;
  nickName: string;
  numberOfChildren?: string;
  organizationDistinguishedName?: string;
  organizationIdentifier?: ComIbmCommerceFoundationCommonDatatypesOrganizationIdentifierType;
  organizationName?: string;
  organizationUnitName?: string;
  orgizationId?: string;
  passwordExpired?: string;
  personIdentifier?: ComIbmCommerceFoundationCommonDatatypesPersonIdentifierType;
  personTitle?: string;
  phone1: string;
  phone1Publish?: string;
  phone1Type?: string;
  phone2: string;
  phone2Publish?: string;
  phone2Type?: string;
  photoURI?: string;
  preferredCommunication?: string;
  preferredCurrency?: string;
  preferredDelivery?: string;
  preferredLanguage?: string;
  primary?: string;
  profileType?: 'Consumer' | 'Business';
  receiveEmailPreference?: Array<PersonPersonReceiveEmailPreference>;
  receiveSMSNotification?: string;
  receiveSMSPreference?: Array<PersonPersonReceiveSMSPreference>;
  registrationApprovalStatus?: string;
  registrationDateTime?: string;
  registrationStatus?: 'Guest' | 'RegisteredPerson';
  secretary?: string;
  state?: string;
  userDataField?: Array<PersonPersonUserDataField>;
  userId?: string;
  zipCode?: string;
}
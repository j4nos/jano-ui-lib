import type { ReactElement } from "react";
import type { BlogCommentForm } from "./BlogCommentForm";
import type { FormButton } from "./FormButton";
import type { FormToggleButtonGroup } from "./FormToggleButtonGroup";
import type { FilterTags } from "./FilterTags";
import type { FormSectionLabel } from "./forms/FormSectionLabel";
import type { CategoryCard, MoreCategoryCard } from "./CategoryCard";
import type { Column } from "./Column";
import type { FancyFeatureThirtyOneCard } from "./FancyFeatureThirtyOneCard";
import type { FancyFeatureThirtyOneTitle } from "./FancyFeatureThirtyOneTitle";
import type { FeatureCard } from "./FeatureCard";
import type { FooterCopyright } from "./FooterCopyright";
import type { FooterLegalLinks } from "./FooterLegalLinks";
import type { FooterSocialLinks } from "./FooterSocialLinks";
import type { FormSubmitButton } from "./FormSubmitButton";
import type { GoalCard } from "./GoalCard";
import type { HeroBannerNineContent } from "./HeroBannerNineContent";
import type { HeroBannerNineGalleryLeft } from "./HeroBannerNineGalleryLeft";
import type { HeroBannerNineGalleryRight } from "./HeroBannerNineGalleryRight";
import type { PortfolioDetailsSidebar } from "./PortfolioDetailsSidebar";
import type { PortfolioGalleryCarousel } from "./PortfolioGalleryCarousel";
import type { PortfolioMetaItem } from "./PortfolioMetaItem";
import type { PricingPlanCard } from "./PricingPlanCard";
import type { Row } from "./Row";
import type { TitleStyleFive } from "./TitleStyleFive";
import type { TitleStyleTen } from "./TitleStyleTen";
import type { AuthInputField } from "./auth/AuthInputField";
import type { AuthPasswordField } from "./auth/AuthPasswordField";
import type { FormCheckboxField } from "./forms/FormCheckboxField";
import type { FileInputField } from "./forms/FileInputField";
import type { ImageUploadField } from "./forms/ImageUploadField";
import type { RadioGroupField } from "./forms/RadioGroupField";
import type { SelectField } from "./forms/SelectField";
import type { TextAreaField } from "./forms/TextAreaField";
import type { TextInputField } from "./forms/TextInputField";

export type FormChild =
  | ReactElement<unknown, typeof BlogCommentForm>
  | ReactElement<unknown, typeof TextInputField>
  | ReactElement<unknown, typeof TextAreaField>
  | ReactElement<unknown, typeof SelectField>
  | ReactElement<unknown, typeof FileInputField>
  | ReactElement<unknown, typeof RadioGroupField>
  | ReactElement<unknown, typeof ImageUploadField>
  | ReactElement<unknown, typeof FormCheckboxField>
  | ReactElement<unknown, typeof AuthInputField>
  | ReactElement<unknown, typeof AuthPasswordField>
  | ReactElement<unknown, typeof Row>
  | ReactElement<unknown, typeof Column>
  | ReactElement<unknown, typeof FormSubmitButton>
  | ReactElement<unknown, typeof FormButton>
  | ReactElement<unknown, typeof FormToggleButtonGroup>
  | ReactElement<unknown, typeof TitleStyleFive>
  | ReactElement<unknown, typeof PortfolioGalleryCarousel>
  | ReactElement<unknown, typeof PortfolioDetailsSidebar>
  | ReactElement<unknown, typeof PortfolioMetaItem>
  | ReactElement<unknown, typeof FeatureCard>
  | ReactElement<unknown, typeof CategoryCard>
  | ReactElement<unknown, typeof MoreCategoryCard>
  | ReactElement<unknown, typeof GoalCard>
  | ReactElement<unknown, typeof PricingPlanCard>
  | ReactElement<unknown, typeof FancyFeatureThirtyOneTitle>
  | ReactElement<unknown, typeof FancyFeatureThirtyOneCard>
  | ReactElement<unknown, typeof TitleStyleTen>
  | ReactElement<unknown, typeof HeroBannerNineContent>
  | ReactElement<unknown, typeof HeroBannerNineGalleryLeft>
  | ReactElement<unknown, typeof HeroBannerNineGalleryRight>
  | ReactElement<unknown, typeof FooterLegalLinks>
  | ReactElement<unknown, typeof FooterSocialLinks>
  | ReactElement<unknown, typeof FooterCopyright>
  | ReactElement<unknown, typeof FormSectionLabel>
  | ReactElement<unknown, typeof FilterTags>;

export type FormChildren = FormChild | Array<FormChild | null | false>;

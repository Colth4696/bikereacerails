require "application_system_test_case"

class SlogansTest < ApplicationSystemTestCase
  setup do
    @slogan = slogans(:one)
  end

  test "visiting the index" do
    visit slogans_url
    assert_selector "h1", text: "Slogans"
  end

  test "creating a Slogan" do
    visit slogans_url
    click_on "New Slogan"

    fill_in "Email", with: @slogan.email
    fill_in "First name", with: @slogan.first_name
    fill_in "Last name", with: @slogan.last_name
    fill_in "Slogan", with: @slogan.slogan
    click_on "Create Slogan"

    assert_text "Slogan was successfully created"
    click_on "Back"
  end

  test "updating a Slogan" do
    visit slogans_url
    click_on "Edit", match: :first

    fill_in "Email", with: @slogan.email
    fill_in "First name", with: @slogan.first_name
    fill_in "Last name", with: @slogan.last_name
    fill_in "Slogan", with: @slogan.slogan
    click_on "Update Slogan"

    assert_text "Slogan was successfully updated"
    click_on "Back"
  end

  test "destroying a Slogan" do
    visit slogans_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Slogan was successfully destroyed"
  end
end

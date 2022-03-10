require 'test_helper'

class SlogansControllerTest < ActionDispatch::IntegrationTest
  setup do
    @slogan = slogans(:one)
  end

  test "should get index" do
    get slogans_url
    assert_response :success
  end

  test "should get new" do
    get new_slogan_url
    assert_response :success
  end

  test "should create slogan" do
    assert_difference('Slogan.count') do
      post slogans_url, params: { slogan: { email: "franksmith@gmail.com", first_name: @slogan.first_name, last_name: @slogan.last_name, slogan: @slogan.slogan } }
    end

    assert_redirected_to slogan_url(Slogan.last)
  end

  test "should show slogan" do
    get slogan_url(@slogan)
    assert_response :success
  end

  test "should get edit" do
    get edit_slogan_url(@slogan)
    assert_response :success
  end

  test "should update slogan" do
    patch slogan_url(@slogan), params: { slogan: { email: @slogan.email, first_name: @slogan.first_name, last_name: @slogan.last_name, slogan: @slogan.slogan } }
    assert_redirected_to slogan_url(@slogan)
  end

  test "should destroy slogan" do
    assert_difference('Slogan.count', -1) do
      delete slogan_url(@slogan)
    end

    assert_redirected_to slogans_url
  end
end
